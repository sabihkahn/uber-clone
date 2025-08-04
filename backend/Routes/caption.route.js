const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const captionController = require('../controllers/caption.controller')
const authmiddelware = require('../middlewares/auth.middleware')

router.post('/register',[ body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('color should be atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('color should be atleast 3 character long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('color should be atleast 1 character long'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'truck', 'bus']).withMessage('invalid vehicle'),
],captionController.captionregister)


router.post('/login',[ body('email').isEmail().withMessage('Please enter a valid email'),
body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),,
],captionController.captionlogin)


router.get('/profile',authmiddelware.authcaption,captionController.getcaptionprofile)

router.post('/logout',authmiddelware.authcaption, captionController.logoutcaption)
module.exports = router