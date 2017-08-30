const Events = require('../models/events');

const eventsController = {
    getAll: (req, res) => {
        Events.findAll().then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            console.log(err);
        })
    },
    addEvent: (req, res) => {
        Events.create({
            event_name: req.body.event_name,
            account_id: req.body.account_id,
            employee_id: req.body.employee_id,
            street: req.body.street,
            state: req.body.state,
            city: req.body.city,
            neighborhood: req.body.neighborhood,
            zipcode: req.body.zipcode
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getById: (req, res) => {
        Events.findById(req.params.id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByEventName: (req, res) => {
        Events.findByEventName(req.params.eventName).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByAccount: (req, res) => {
        Events.findByAccountId(req.params.accId).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByEmployee: (req, res) => {
        Events.findByEmployeeId(req.params.empId).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByStreet: (req, res) => {
        Events.findByStreet(req.params.street).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByState: (req, res) => {
        Events.findByState(req.params.state).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByCity: (req, res) => {
        Events.findByCity(req.params.city).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByNeighborhood: (req, res) => {
        Events.findByNeighborhood(req.params.neighborhood).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByZip: (req, res) => {
        Events.findByZipcode(req.params.zip).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    editEvent: (req, res) => {
        console.log(req.params.id);
        Events.update({
            event_name: req.body.event_name,
            account_id: req.body.account_id,
            employee_id: req.body.employee_id,
            street: req.body.street,
            state: req.body.state,
            city: req.body.city,
            neighborhood: req.body.neighborhood,
            zipcode: req.body.zipcode
        }, req.params.id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => { console.log(err)} );
    },
    deleteEvent: (req, res) => {
        Events.delete(req.params.id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    }
    
}

module.exports = eventsController;