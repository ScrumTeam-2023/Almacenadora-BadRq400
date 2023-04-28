'use strict'

const bcrypt = require ('bcrypt');

//Validacion GEN


//validate Data
exports.validateData = (data)=>{
    let keys = Object.keys(data),msg = '';
    for(let key of keys){
        if(data [key] !== null &&
           data [key] !== undefined &&
           data [key] !== '') continue;
        msg += `Params ${key} is REQUIRED`;
    }
    return msg.trim();

}

//Password Encryption

exports.encrypt = async(password)=>{
    try {
        return await bcrypt.hash(password, 3);
    } catch (err) {
        console.error(err)
        console.log('Error At Encrypting The password')
        
    }
}

//Password Comparation

exports.checkPassword = async(password,hash)=>{
    try {
        return await bcrypt.compare(password,hash)
    } catch (err) {
        console.error(err)
        console.log('Error At Checking the Password and Hash')
        return false;
        
    }
}


//UpdateValidation
exports.checkUpdate = (data)=>{
    if ( Object.entries(data).length ===0 || data.user || data.user == ''
    
    ){
        return false;
    }
    return true;

}