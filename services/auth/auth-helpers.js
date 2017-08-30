const bcrypt = require('bcryptjs');
const Employees = require('../../models/employees');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

module.exports = {
    comparePass,
}
