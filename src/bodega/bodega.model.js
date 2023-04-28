'use strict';

const mongoose = require('mongoose');

const bodegaSchema = mongoose.Schema({
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
    }
}, { versionKey: false });

module.exports = mongoose.model('Bodega', bodegaSchema);
