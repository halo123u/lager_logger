const Sales = require('../models/sales.js');
salesController = {}
    

salesController.create = (req, res) => {
    Sales.create(req.order)
    .then( sales => {
        res.json(sales);
        console.log(sales)
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
    

salesController.findAll = (req, res) => {
    Sales.findAll(req.user.id)
    .then(saless => {
        res.json(sales);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

salesController.findBySale_id = (req, res) => {
    Sales.findBySale_id(req.params.Sale_id)
    .then(sales => {
        res.json(sales);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
salesController.findByOrder_id = (req, res) => {
    Sales.findByOrder_id(req.params.Order_id)
    .then(sales => {
        res.json(sales);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
salesController.findByCases = (req, res) => {
    Sales.findByCases(req.params.Cases)
    .then(sales => {
        res.json(sales);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
salesController.findByMoment = (req, res) => {
    Sales.findByMoment(req.params.Moment)
    .then(sales => {
        res.json(sales);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}
    

salesController.update = (req, res) => {
    console.log(req.body)
    console.log(req.params.id);
    Sales.update(req.body.sales, req.params.id)
    .then(sales => {
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

salesController.delete = (req, res) => {
    Sales.delete(req.params.id)
    .then(sales => {
        console.log(`We deleted ${sales}`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
    

module.exports = salesController;