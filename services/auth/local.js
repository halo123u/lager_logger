const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const Employee = require('../../models/employees');
const authHelpers = require('./auth-helpers');

const options = {};

init();

passport.use(
    new LocalStrategy(options, (username, password, done) => {
        Employee.findByUserName(username)
            .then(employee => {
                if (!employee) {
                    return done(null, false);
                }
                if(!authHelpers.comparePass(password, employee.password)) {

                    console.log("auth-helpers3",employee);

                    return done(null, false)
                } else {
                    console.log("auth-helpers4",employee);
                    return done(null, employee);
                }
            }).catch(err => {
                console.log(err);
                return done(err);
            })
        })
    )

module.exports = passport;
