'use Strict'

//Creacion de tokens (Almacenadora)

const jwt = require ('jsonwebtoken');
exports.createToken = async(user)=>{
    try {
        let payload = {
            sub: user._id,
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email,
            role: user.role,
            //Init
            iat: Math.floor(Date.now() / 5000),
            //Expires
            exp: Math.floor(Date.now() / 5000) * (60 * 120)
        }
        return jwt.sign(payload, `${process.env.SECRET_KEY}`);
    } catch (err) {
        console.error(err)
        console.log('Error at Token Creation')
        return err;
        
    }
}