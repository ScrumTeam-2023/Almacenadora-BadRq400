'use Strict'
const User = require('./user.model');
const { validateData, encrypt , checkPassword } = require('../utils/validate')
const { createToken } = require ('../services/jwt')



//PUBliC
exports.test = (req,res)=>{
    res.send({message: 'Storage Test is working!'})
}

exports.register = async(req,res)=>{
    

}

exports.login = async(req,res)=>{
    
}

exports.update = async(req,res)=>{
    
}

//ADMIN
exports.save = async(req,res)=>{
    
}

exports.delete = async(req,res)=>{
    
}

