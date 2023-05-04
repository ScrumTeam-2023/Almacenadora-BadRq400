'use strict';

const mongoose = require('mongoose');

const bodegaSchema = mongoose.Schema({
<<<<<<< HEAD
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    tamaño: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: Boolean,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
=======
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    price: {
        type: Number,
        required: true
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: false
>>>>>>> main
    }
}, { versionKey: false });

module.exports = mongoose.model('Bodega', bodegaSchema);
