const express = require('express');
const accountController = require('../controllers/accounts-controllers');
const accounts = express.Router();

accounts.get('/', accountController.getAll);
accounts.get('/id/:id',accountController.getById);
accounts.get('/acc/:accId', accountController.getByAcc);
accounts.get('/comp/:company', accountController.getByCompany);
accounts.get('/info/:id', accountController.getInfoListAccount);
accounts.post('/',accountController.addAccount);
accounts.put('/:id',accountController.editAccount);
accounts.delete('/:id',accountController.deleteAccount);

module.exports = accounts;
