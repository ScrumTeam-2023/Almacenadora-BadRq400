'use strict'

const express = require('express');
const api = express.Router();
const accountController = require('./account.controller');
const { isAdmin } = require('../services/authenticated')

//api.get('/test', accountController.test)
<<<<<<< HEAD
api.get('/get-accounts', accountController.getAccounts)
api.post('/add-account', accountController.addAccount)
=======
api.get('/get-accounts', accountController.getAccounts);
api.post('/add-account', accountController.addAccount);
>>>>>>> malvarez2018477
api.put('/update-account/:id', accountController.updateAccount)
api.delete('/delete-account/:id', accountController.deleteAccount);

module.exports = api;

