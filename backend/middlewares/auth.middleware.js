const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const captionmodel = require('../models/caption.model')
const jwt = require('jsonwebtoken');
const blacklistmodel = require('../models/blacklistToken.model')

    module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const isBlacklisted = await blacklistmodel.findOne({ token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unauthorized access ' });

    }

}
    module.exports.authcaption = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const isBlacklisted = await blacklistmodel.findOne({ token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const caption = await captionmodel.findById(decoded._id);
        req.caption = caption;
        return next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'unauthorized access ' });

    }

}