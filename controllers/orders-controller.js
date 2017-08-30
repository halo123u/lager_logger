const Orders = require('../models/orders.js');
ordersController = {}
    

ordersController.create = (req, res) => {
    Orders.create(req.order)
    .then( orders => {
        res.json(orders);
        console.log(orders)
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
    

ordersController.index = (req, res) => {
    Orders.findAll(req.user.id)
    .then(orderss => {
        res.json(orderss);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

ordersController.findByid = (req, res) => {
    Orders.findById(req.params.id)
    .then(orders => {
        res.json(orders);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
    

ordersController.update = (req, res) => {
    console.log(req.body)
    console.log(req.params.id);
    Orders.update(req.body.orders, req.params.id)
    .then(orders => {
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

ordersController.delete = (req, res) => {
    Orders.delete(req.params.id)
    .then(orders => {
        console.log(`We deleted ${orders}`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

module.exports = ordersController;