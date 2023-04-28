//Imports
const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
<<<<<<< HEAD

//instancia 
const app = express();
const port = process.env.PORT || 3200;
=======
const userRoutes = require('../src/user/user.routes');
//instancia 
const app = express();
const port = process.env.PORT || 3000;
>>>>>>> ctomas2021215
//RUTAS PRO



//config del Server
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(morgan('dev'))
<<<<<<< HEAD
=======
app.use('/user',userRoutes);
>>>>>>> ctomas2021215

//Rutas Default

//turn up This Crap
exports.initServer = ()=>{
    app.listen(port);
    console.log(`server Running on port ${port}`);
}

<<<<<<< HEAD
=======


>>>>>>> ctomas2021215
