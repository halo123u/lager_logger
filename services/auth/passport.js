const passport = require('passport');
const Employee = require('../../models/employees');

module.exports = () => {
    passport.serializeUser((employee, done) => {
        done(null, employee.employeename)
    })

    passport.deserializeUser((employeename, done) => {
        Employee.findByEmployeeName(employeename)
            .then(employee => {
                done(null, employee);
            }).catch(err => {
                done(err, null);
            });
    });
};



// const passport = require('passport');
// const User = require('../../models/user');

// module.exports = () => {
//   passport.serializeUser((user, done) => {
//     done(null, user.username);
//   });

//   passport.deserializeUser((username, done) => {
//     User.findByUserName(username)
//       .then(user => {
//         done(null, user);
//       }).catch(err => {
//         done(err, null);
//       });
//   });
// };

