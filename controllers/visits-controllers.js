const Visits = require('../models/visits');

const visitsController = {
    addVisit: (req, res) => {
        Visits.create ({
            date_info: req.body.date_info,
            account_id:req.body.account_id,
            employee_id: req.body.employee_id
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err)); 
    },
    getByDate: (req, res) => {
        Visits.findByMoment(req.params.date_info).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByAccount: (req, res) => {
        Visits.findByAccountId(req.params.account_id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByEmployee: (req, res) => {
        Visits.findByEmployeeId(req.params.employee_id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    }
}

module.exports = visitsController;
