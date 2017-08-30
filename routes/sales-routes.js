const express = require('express');
const salesController = require('../controllers/sales-controller.js');
const Sales = express.Router();
    

Sales.get('/', salesController.findAll);
Sales.get('/sales/:sale_id',salesController.findBySale_id);
Sales.get('/sales/:order_id',salesController.findByOrder_id);
Sales.get('/sales/:case',salesController.findByCases);
Sales.get('/sales/:Moment',salesController.findByMoment);

Sales.post('/',salesController.create);
Sales.put('/:id',salesController.update);
Sales.delete('/:id',salesController.delete);
    

module.exports = Sales;