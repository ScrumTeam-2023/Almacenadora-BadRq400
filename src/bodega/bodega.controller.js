'use strict';

const Bodega = require('../models/bodega');

// Función para crear una nueva bodega
const crearBodega = async (req, res) => {
  const { nombre, descripcion, ubicacion, tamaño, disponibilidad, precio } = req.body;
  const { userId } = req.params;

  try {
    const nuevaBodega = new Bodega({
      nombre,
      descripcion,
      ubicacion,
      tamaño,
      disponibilidad,
      precio,
      user: userId
    });
    const bodegaGuardada = await nuevaBodega.save();
    res.status(201).json(bodegaGuardada);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al guardar la bodega' });
  }
};

// Función para obtener todas las bodegas
const obtenerBodegas = async (req, res) => {
  const { nombre, sucursal, disponibilidad } = req.query;
  let filtro = {};

  // Agregar filtros según los parámetros de búsqueda enviados
  if (nombre) {
    filtro.nombre = { $regex: nombre, $options: 'i' };
  }
  if (sucursal) {
    filtro.sucursal = { $regex: sucursal, $options: 'i' };
  }
  if (disponibilidad) {
    filtro.disponibilidad = disponibilidad === 'true';
  }

  try {
    const bodegas = await Bodega.find(filtro).populate('user');
    res.json(bodegas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener las bodegas' });
  }
};

// Función para obtener una bodega por su ID
const obtenerBodegaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const bodega = await Bodega.findById(id).populate('user');
    if (!bodega) {
      return res.status(404).json({ mensaje: 'No se encontró la bodega' });
    }
    res.json(bodega);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener la bodega' });
  }
};

// Función para actualizar una bodega por su ID
const actualizarBodega = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, ubicacion, tamaño, disponibilidad, precio } = req.body;
  try {
    const bodegaActualizada = await Bodega.findByIdAndUpdate(
      id,
      {
        nombre,
        descripcion,
        ubicacion,
        tamaño,
        disponibilidad,
        precio
      },
      { new: true }
    ).populate('user');
    if (!bodegaActualizada) {
      return res.status(404).json({ mensaje: 'No se encontró la bodega' });
    }
    res.json(bodegaActualizada);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar la bodega' });
  }
};

// Función para eliminar una bodega por su ID
async function eliminarBodega(req, res) {
    try {
      const bodegaId = req.params.id;
      const bodega = await Bodega.findById(bodegaId);
      
      // Verificar si la bodega está asignada a algún usuario
      if (bodega.user) {
        return res.status(400).json({ message: "No se puede eliminar la bodega porque está asignada a un usuario." });
      }
      
      await Bodega.findByIdAndDelete(bodegaId);
      res.json({ message: "La bodega ha sido eliminada correctamente." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ha ocurrido un error al eliminar la bodega." });
    }
  }

