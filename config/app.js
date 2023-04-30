'use Strict'
//Imports
const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

//instancia 
const app = express();
const port = process.env.PORT || 3200;
//RUTAS PRO
const clientRoutes = require('../src/clients/clients.routes');
<<<<<<< HEAD
const userRoutes = require('../src/user/user.routes')

=======
const userRoutes = require('../src/user/user.routes');
const servicesRoutes = require ('../src/servicesAdicional/servicesAdicional.routes');
const accountRoutes = require ('../src/account/account.routes');
const bodegaRoutes = require ('../src/bodega/bodega.routes');
>>>>>>> ctomas2021215

//config del Server
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(morgan('dev'))
app.use('/user',userRoutes);
app.use('/client',clientRoutes);
<<<<<<< HEAD
=======
app.use('/services', servicesRoutes);
app.use('/account',accountRoutes);
app.use('/bodega',bodegaRoutes)
>>>>>>> ctomas2021215

//Rutas Default

//turn up This Crap
exports.initServer = ()=>{
    app.listen(port);
    console.log(`server Running on port ${port}`);
}

