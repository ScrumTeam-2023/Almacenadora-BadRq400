'use Strict'
//Imports
const express = require ('express');
const api = express.Router();
const userController = require('./user.controller')
const { ensureAuth , isAdmin } = require('../services/authenticated')
//TEST
api.post('/test',userController.test);
//PUBLIC

//PRIVATE


module.exports = api;