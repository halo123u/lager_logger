const express = require('express');
const ordersController = require('../controllers/orders-controllers');
const Orders = express.Router();
    

Orders.get('/', ordersController.index);
Orders.get('/orders/:id',ordersController.getById);
Orders.post('/',ordersController.create);
Orders.put('/:id',ordersController.update);
Orders.delete('/:id',ordersController.delete);
    

module.exports = Orders;