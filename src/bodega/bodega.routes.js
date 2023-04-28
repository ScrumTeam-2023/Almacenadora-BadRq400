'use stric'
const express = require('express');
const router = express.Router();
const bodegaController = require('./bodega.controller');

// Rutas para las bodegas
router.get('/bodegas', bodegaController.obtenerBodegas);
router.post('/bodegas', bodegaController.crearBodega);
router.get('/bodegas/:id', bodegaController.obtenerBodegaPorId);
router.put('/bodegas/:id', bodegaController.actualizarBodega);
router.delete('/bodegas/:id', bodegaController.eliminarBodega);

module.exports = router;
