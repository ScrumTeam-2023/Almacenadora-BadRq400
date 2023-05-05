'use strict'

const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    dpi:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    }, 
    surname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},
{
    versionKey:false 
});

<<<<<<< HEAD
module.exports = mongoose.model('account', accountSchema);
=======
module.exports = mongoose.model('Account', accountSchema);
>>>>>>> malvarez2018477
