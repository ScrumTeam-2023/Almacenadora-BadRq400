<<<<<<< HEAD
'use strict'

const mongoose = require('mongoose')
const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    surname:{
        type: String,
        required: true

    },
    phone:{
        type: String,
        required: true
    }

=======
'use strict'

const mongoose = require('mongoose')
const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    surname:{
        type: String,
        required: true

    },
    phone:{
        type: String,
        required: true
    }

>>>>>>> ctomas2021215
}); module.exports = mongoose.model ('Client',clientSchema);