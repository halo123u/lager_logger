const db = require('../db/config');

const Visits = {}

Visits.create = visit => {
    console.log(visit)
    return db.one(`
    INSERT INTO visits
    (date_info,
    account_id,
    employee_id)
    VALUES
    ($1, $2, $3)
    RETURNING *
    `, [visit.date_info,
        visit.account_id,
        visit.employee_id])
}

Visits.findByMoment = moments => {
    return db.query(`
    SELECT * FROM visits
    WHERE date_info = $1
    `, [moment])
}

Visits.findByAccountId = account_id => {
    return db.query(`
    SELECT * FROM visits
    WHERE account_id = $1
    `, [account_id])
}

Visits.findByEmployeeId = employee_id => {
    return db.query(`
    SELECT * FROM visits
    WHERE employee_id = $1
    `, [employee_id])
}

module.exports = Visits;
