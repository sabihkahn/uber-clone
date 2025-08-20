const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'first namemust be 3 character long']
        },
        lastname: {
            type: String,
            minlength: [3, 'first namemust be 3 character long']
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'email must be 5 character long'],
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    socketid: {
        type: String
    }
})

userSchema.methods.generateAuthToken  = function () {

    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '3h' });
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}
userSchema.statics.hashPassword = async function (password) {

    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

const userModel = mongoose.model('user2', userSchema);
module.exports = userModel;