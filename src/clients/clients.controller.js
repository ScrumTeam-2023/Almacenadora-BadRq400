'use strict'

const Client = require('../clients/clients.model')
const { validateData, encrypt , checkPassword } = require('../utils/validate')
const { createToken } = require ('../services/jwt')


//EMPLOYEE ONLY!
exports.saveClient = async (req,res)=>{
    try {
        let params = req.body;

        let existClient = await Client.findOne({name: params.name})
        if(existClient) return res.send({message: 'This Client is Already Registed!'})
        const client = new Client (params);
        await client.save();
        return res.send({message: 'Client Registed! Ready to be Assign to our Services!' , client})
        
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
=======
    } catch (err) {
>>>>>>> malvarez2018477
=======
    } catch (err) {
>>>>>>> ctomas2021215
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "SAVE!"'})
        
    }
}

exports.getClient = async(req,res)=>{
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const client = await Client.find().populate('category')
=======
        const client = await Client.find().populate()
>>>>>>> malvarez2018477
=======
        const client = await Client.find().populate()
>>>>>>> ctomas2021215
        return res.send({message: 'Client',client})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "GET CLIENT!"'}) 
    }
}

exports.getClientBy = async(req,res)=>{
    try {
        let clientId = req.params.id;
        let client = await Client.findById({_id: clientId}).populate
        if (!client) return res.status(418).send({message: 'Client not Found!'})
        return res.send(client)
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "GET CLIENT BY...!"'}) 
        
    }
}

exports.updateClient = async(req,res)=>{
    try {
        let clientId = req.params.id;
        let params = req.body;
        let updatedClient = await Client.findOneAndUpdate(
            
            {_id: clientId},
            params,
            {new:true});

            return res.send({message: 'Client Updated!', updatedClient})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "UPDATING!"'}) 
        
    }
}

exports.deleteClient = async(req,res)=>{
    try {
        let clientId = req.params.id;
        let deletedClient = await Client.findOneAndDelete({_id: clientId});
        return res.send({message: 'Client Deleted Succesfully!', deletedClient})
<<<<<<< HEAD
<<<<<<< HEAD
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "DELETING!!"'}) 
        
=======

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "DELETING!!"'}) 

>>>>>>> malvarez2018477
=======

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'CRITICAL HIT! at "DELETING!!"'}) 

>>>>>>> ctomas2021215
    }
}







































// :)