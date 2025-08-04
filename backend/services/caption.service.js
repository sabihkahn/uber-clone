const captionModel = require('../models/caption.model')

module.exports.createcaption = async({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
    if(!firstname,!lastname,!email,!password,!color,!plate,!capacity,!vehicleType){
        throw new Error('all fields are required')
    }
    const caption = captionModel.create({
         fullname:{
            firstname,
            lastname
         },
         email,
         password,
         
         vehicle:{
            color,
            plate,
            capacity,
            vehicleType
         }

    })

    return caption
     
}