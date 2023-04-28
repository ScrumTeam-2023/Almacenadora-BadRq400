'use strict'

const express = require('express');
const api = express.Router();
const clientController = require('../clients/clients.controller')
const {ensureAuth , isAdmin} = require('../services/authenticated')

//EMPLOYEE ONLY! CRUD
api.post('/save',ensureAuth,clientController.saveClient);

api.get('/gets',ensureAuth,clientController.getClient);
api.get('/get/:id',ensureAuth,clientController.getClientBy)

api.put('/update/:id',ensureAuth,clientController.updateClient);
api.delete('/delete/:id',ensureAuth,clientController.deleteClient);