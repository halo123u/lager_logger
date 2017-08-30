const passport = require('passport');
const Employee = require('../../models/employees');

module.exports = () => {
    passport.serializeUser((employee, done) => {
        done(null, employee.username)
    })

    passport.deserializeUser((username, done) => {
        Employee.findByUserName(username)
            .then(employee => {
                done(null, employee);
            }).catch(err => {
                done(err, null);
            });
    });
};

