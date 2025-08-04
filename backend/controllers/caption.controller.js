
const { model } = require('mongoose');
const captionmodel = require('../models/caption.model')
const captionservice = require('../services/caption.service')
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

    module.exports.captionregister = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body

    const iscaptionalreadyexist = await captionmodel.findOne({ email })

    if (iscaptionalreadyexist) {
        res.status(400).json({ message: 'caption already exist' })
    }


    const hash = await captionmodel.hashPassword(password)
    const caption = await captionservice.createcaption({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = caption.generateAuthToken();
    res.status(201).json({ token, caption })

}
    module.exports.captionlogin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body

    const captiondata = await captionmodel.findOne({ email }).select("+password")
    
    if (!captiondata) {
        res.status(404).json({ message: "user not found" })
    }
    const isMatch =  captiondata.comparePassword(password)

    if (!isMatch) {
        res.status(400).json({ message: "invalid email or password" })
    }

    const token = captiondata.generateAuthToken();
    res.cookie('token',token)
    
    res.status(201).json({ token, captiondata })
    

}

module.exports.getcaptionprofile = async(req,res,next) =>{


res.status(200).json({caption:req.caption})

}

module.exports.logoutcaption = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split('')[1]
    await blacklistTokenModel.create({token})
    res.clearCookie('token')
    res.status(200).send({message:"logout successfully"})
}