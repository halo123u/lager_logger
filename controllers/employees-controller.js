const bcrypt = require('bcryptjs');
const Employees = require('../models/employees.js');

const employeesController = {

create: function(req, res) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    const hashKey = bcrypt.hashSync(req.body.key, salt);
    Employees.create({
        user_type: req.body.user_type,
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: hash,
        email: req.body.email,
        phone: req.body.phone,
        key: req.body.hashKey,
    }).then(employee => {
        req.login(employee, (err) => {
            if (err) return next(err);
                res.json({
                employee: employee,
                auth: true,
            })
        });
      }).catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    },

    update: function(req, res){
        const salt = bcrypt.genSaltSync();
        const hash = (req.body.updatePassword) ? bcrypt.hashSync(req.body.newPassword, salt) : "";
        let employee= (req.body.updatePassword==true)?
                {
                    id: req.body.id,
                    newPassword: hash,
                    updatePassword:true
                }
            :
                {
                    id: req.body.id,
                    user_type: req.body.user_type,
                    username: req.body.username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone: req.body.phone,
                    updatePassword:false
                }
        Employees.update(employee).then(employee => {
            res.json({
                employee: employee,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
    },

    findAll: function(req, res){
      Employees.findAll()
      .then(employees => {
            res.json({
                employees:employees,
            });
      }).catch(err => {
            console.log(err);
            res.status(500).json({err: err});
      });
    },

    findByUserName: function(req, res){
        Employees.findByUserName(req.params.username)
        .then(employee => {
            res.json({
                employee: employee,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    findByEmployeeId: function(req, res){
        Employees.findByEmployeeId(req.params.id)
        .then(employee => {
            res.json({
                employee: employee,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}

module.exports = employeesController;
