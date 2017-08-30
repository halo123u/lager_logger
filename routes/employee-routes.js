const express = require('express');
const employeeRoutes = express.Router();

const employeeController = require('../controllers/employees-controller');


employeeRoutes.post('/', employeeController.create);
employeeRoutes.get('/', employeeController.findAll);
employeeRoutes.get('/:username', employeeController.findByUserName);
employeeRoutes.get('/id/:id', employeeController.findByEmployeeId);
employeeRoutes.put('/:id', employeeController.update);

module.exports = employeeRoutes;
