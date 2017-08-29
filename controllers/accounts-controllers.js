const Account = require('../models/accounts');

const accountController = {
    getAll: (req,res) => {
        Account.getAllAcc().then(data =>{
            console.log(data);
            res.json(data);
        }).catch(err =>{
            console.log(err);
        })
    },
    getById: (req,res) => {
        Account.findById(req.params.id).then(data =>{
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByAcc: (req,res) => {
        Account.findByAccNum(req.params.accId).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    getByCompany : (req,res)=> {
        Account.findByCompany(req.params.company).then(data =>{
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    },
    addAccount : (req,res) => {
        Account.createNewAcc({
            account_num : req.body.acc_num,
            company : req.body.company,
            buyer : req.body.buyer,
            street : req.body.street,
            state : req.body.state,
            city : req.body.city,
            neighborhood : req.body.neighborhood,
            zipcode : req.body.zipcode,
            phone :req.body.phone,
            email :req.body.email,
            delivery_day : req.body.deliveryDay,
            delivery_time : req.body.deliveryTime,
            premises : req.body.premises,
            status : req.body.status
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err=> console.log(err));
    },
    editAccount : (req,res) => {
        Account.editAccount({
            account_num : req.body.acc_num,
            company : req.body.company,
            buyer : req.body.buyer,
            street : req.body.street,
            state : req.body.state,
            city : req.body.city,
            neighborhood : req.body.neighborhood,
            zipcode : req.body.zipcode,
            phone :req.body.phone,
            email :req.body.email,
            delivery_day : req.body.deliveryDay,
            delivery_time : req.body.deliveryTime,
            premises : req.body.premises,
            status : req.body.status
        }, req.params.id).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => { console.log(err)});
    },
    deleteAccount : (req,res) => {
        Account.deleteAccount(req.params.id).then(data=> {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    }

}

module.exports = accountController;