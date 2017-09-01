const express = require('express');
const visitsController = require('../controllers/visits-controllers');
const visit = express.Router();

visit.post('/', visitsController.addVisit);
visit.get('/', visitsController.getAll);
visit.get('/id/:id', visitsController.getById);
visit.get('/date/:date_info', visitsController.getByDate);
visit.get('/acc/:account_id', visitsController.getByAccount);
visit.get('/emp/:employee_id', visitsController.getByEmployee);
visit.put('/:id', visitsController.editVisit);
visit.delete('/:id', visitsController.deleteVisit);

visit.get('/comps/', visitsController.getWithCompany);

module.exports = visit
