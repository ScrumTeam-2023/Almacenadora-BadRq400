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
