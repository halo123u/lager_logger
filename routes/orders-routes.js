const express = require('express');
const ordersController = require('../controllers/orders-controller.js');
const orderRoutes = express.Router();
    

orderRoutes.get('/', ordersController.index);
orderRoutes.get('/:id',ordersController.getById);
orderRoutes.post('/',ordersController.create);
orderRoutes.put('/:id',ordersController.update);
orderRoutes.delete('/:id',ordersController.delete);
    

module.exports = orderRoutes;