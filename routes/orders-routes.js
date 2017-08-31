const express = require('express');
const ordersController = require('../controllers/orders-controller.js');
const orderRoutes = express.Router();
    

orderRoutes.get('/', ordersController.index);
orderRoutes.get('/id/:id',ordersController.getById);
orderRoutes.post('/',ordersController.create);
orderRoutes.put('/id/:id',ordersController.update);
orderRoutes.delete('/id/:id',ordersController.delete);

orderRoutes.get('/comps',ordersController.getWithCompany);
    

module.exports = orderRoutes;