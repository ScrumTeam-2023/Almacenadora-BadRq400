'use Strict'
//token Validation

const jwt = require('jsonwebtoken');

//Barrier //HUNT DOWN THE SUCURSALES

exports.ensureAuth = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(403).send({message: 'Doesnt Contain the Authorization Header!'})
    }else
         try {
            let token = req.headers.authorization.replace(/['"]+/g,'')
            var payload = jwt.decode(token , `${process.env.SECRET_KEY}`)
            if(Math.floor(Date.now()/1000)>= payload.exp){
                return res.status(401).send({message: 'Again we have the pleasure to say that your token Is not valid'})
            }
         } catch (err) {
            console.error(err);
            return res.status(400).send({message: 'We have the pleasure to say that your token is Invalid'});
            
         }
         req.user = payload;
         next()
}

exports.isAdmin = async(req, res, next)=>{
    try{
        let user = req.user;
        if(user.role !== 'ADMIN') return res.status(403).send({message: 'Unauthorized user'});
        next();
    }catch(err){
        console.error(err);
        return res.status(403).send({message: 'Error unauthorized user'});
    }
}