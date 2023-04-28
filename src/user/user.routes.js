'use Strict'
//Imports
const express = require ('express');
const api = express.Router();
const userController = require('./user.controller')
const { ensureAuth , isAdmin } = require('../services/authenticated')
//TEST
// api.post('/test',userController.test);
//PUBLIC
api.post('/register',userController.register)
api.post('/login',userController.login);
api.post('/search',userController.Search)
api.get('/get',userController.getUser)
//PRIVATE
api.post ('/save', userController.save)
api.put('/update/:id',userController.update)
api.delete('/delete/:id',userController.delete)


module.exports = api;