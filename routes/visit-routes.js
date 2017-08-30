const express = require('express');
const visitsController = require('../controllers/visits-controllers');
const visit = express.Router();

visit.post('/', visitsController.addVisit);
visit.get('/date/:date', visitsController.getByDate);
visit.get('/acc/:accId', visitsController.getByAccount);
visit.get('/emp/:employee', visitsController.getByEmployee);

module.exports = visit
