'use Strict'

<<<<<<< HEAD
require ('dotenv').config()
=======
require('dotenv').config()
>>>>>>> ctomas2021215
const mongoConfig = require('./config/mongo');
const app = require('./config/app')

mongoConfig.connect();
app.initServer();