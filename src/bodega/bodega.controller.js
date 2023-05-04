<<<<<<< HEAD
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

=======
'use strict'

const Bodega = require('./bodega.model');

//create 
exports.createBodega = async (req, res) => {
  try {
    const newBodega = new Bodega(req.body);
    const savedBodega = await newBodega.save();
    return res.send({ message: 'Bodega created', bodega: savedBodega });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error creating bodega' });
  }
};

//functions SEARCH 
exports.getBodegas = async (req, res) => {
  try {
    const bodegas = await Bodega.find().populate('client');
    return res.send({ message: 'Bodegas found', bodegas });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error getting bodegas' });
  }
};

exports.search = async (req, res) => {
  try {
    const { name } = req.query;

    const bodegas = await Bodega.find({
      name: { $regex: name, $options: 'i' }
    }).populate('client');

    return res.send({ message: 'Bodegas found', bodegas });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error searching bodegas' });
  }
};

// exports.searchBodega = async (req, res) => {
//   try {
//     const params = {
//       name: req.body.name,
//       availability: req.body.availability // Nueva validación para buscar por disponibilidad
//     };

//     const validate = validateData(params);
//     if (validate) {
//       return res.status(400).send(validate);
//     }

//     const bodegas = await Bodega.find({
//       $and: [
//         {
//           name: {
//             $regex: params.name,
//             $options: "i"
//           }
//         },
//         {
//           availability: {
//             $regex: params.availability,
//             $options: "i"
//           }
//         }
//       ]
//     }).populate("client", "name surname phone");

//     return res.send({ bodegas });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({ message: "Error searching bodegas" });
//   }
// };

//update
exports.updateBodega = async (req, res) => {
  try {
    const bodegaId = req.params.id;
    const data = req.body;
    const existBodega = await Bodega.findOne({ name: data.name }).lean();
    if (existBodega && existBodega._id != bodegaId) {
      return res.send({ message: 'Bodega already created' });
    }
    const updatedBodega = await Bodega.findOneAndUpdate(
      { _id: bodegaId },
      data,
      { new: true }
    );
    if (!updatedBodega) {
      return res.status(404).send({ message: 'Bodega not found and not updated' });
    }
    return res.send({ message: 'Bodega updated', bodega: updatedBodega });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error updating bodega' });
  }
};


//delete
exports.deleteBodega = async (req, res) => {
  try {
    const bodegaId = req.params.id;
    const bodega = await Bodega.findById(bodegaId).populate('client');
    if (!bodega) {
      return res.status(404).send({ message: 'Bodega not found' });
    }
    if (bodega.client) {
      return res.status(400).send({ message: 'Cannot delete bodega assigned to a client' });
    }
    await Bodega.findByIdAndDelete(bodegaId);
    return res.send({ message: 'Bodega deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error deleting bodega' });
  }
};
>>>>>>> main
