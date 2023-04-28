'use Strict'

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    surname: {
        type: String,
        required: true

    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    email: {

        type: String,
        required: true

    },
    phone:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        uppercase: true,
        default: 'EMPLOYEE'

    },

}, { versionKey: false });
module.exports = mongoose.model('User',userSchema)