const db = require('../db/config');

const Visits = {}

Visits.findAll = () => {
    return db.query(`
    SELECT * FROM visits`)
}

Visits.create = visit => {
    console.log(visit)
    return db.one(`
    INSERT INTO visits
    (date_info,
    account_id,
    employee_id,
    additonal_info)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `, [visit.date_info,
        visit.account_id,
        visit.employee_id,
        visit.additonal_info])
}

Visits.findById = visit_id => {
    return db.one (`
    SELECT * FROM visits
    WHERE visit_id = $1
    `, [visit_id]);
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
Visits.findAllWithCompany = () => {
    return db.query(`
        SELECT * FROM visits JOIN accounts
        ON visits.account_id = accounts.account_id
    `)
}

Visits.update = (options, visit_id) => {
    return db.none(`
    UPDATE visits SET
    date_info = $1,
    account_id = $2,
    employee_id = $3,
    additonal_info = $4
    WHERE visit_id = $5
    `, [options.date_info,
        options.account_id,
        options.employee_id,
        options.additonal_info,
        visit_id])
}

Visits.delete = (visit_id) => {
    return db.none(`
    DELETE FROM visits
    WHERE id = $1
    `, [visit_id])
}

module.exports = Visits;
