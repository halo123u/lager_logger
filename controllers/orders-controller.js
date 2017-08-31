const Orders = require('../models/orders.js');
const ordersController = {}
    

ordersController.create = (req, res) => {
    order = {
        refence_number: req.body.refence_number,
        delivery_info: req.body.delivery_info,
        account_id: req.body.account_id,
        order_date: req.body.order_date,
        employee_id: req.body.employee_id,
    }
    Orders.create(order)
    .then( orders => {
        res.json(orders);
        console.log(orders)
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
    

ordersController.index = (req, res) => {
    // Orders.findAll(req.user.id)
    Orders.findAll()
    .then(orders => {
        res.json(orders);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    
ordersController.findBy = (req, res) => {
    Orders.findBy(req.query, req.user.id)
    .then(orders => {
        res.json(orders);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

ordersController.getById = (req, res) => {
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
    Orders.update(req.body.orders)
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
 

ordersController.getWithCompany = (req,res) => {
    Orders.findAllWithCompany()
    .then(orders => {
        res.json(orders);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}   

module.exports = ordersController;