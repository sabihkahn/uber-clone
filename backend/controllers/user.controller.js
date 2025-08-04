const userModel = require('../models/user.model');
const userservice = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body
  const isuseralreadyexist = userModel.findOne({ email })
  if (isuseralreadyexist) {
    res.status(400).json({ message: "user already exist" })
  }



  console.log('Received body:', req.body);
  const hash = await userModel.hashPassword(password)
  const user = await userservice.createUser({ fullname, email, password: hash })
  const token = user.generateAuthToken();

  res.status(200).json({ token, user })
}

module.exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body
  const isuseralreadyexist = userModel.findOne({ email })
  if (isuseralreadyexist) {
    res.status(400).json({ message: "user already exist" })
  }

  const user = await userModel.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ message: 'invalid email or password' });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'invalid email or password' });
  }

  const token = user.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({ token, user });

}



module.exports.getProfile = async (req, res, next) => {
  const user = await userModel.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
}

module.exports.logout = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  // Add the token to the blacklist
  const BlacklistToken = require('../models/blacklistToken.model');
  await BlacklistToken.create({ token });

  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
}