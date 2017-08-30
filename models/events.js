const db = require('../db/config');

const Events = {}

Events.findAll = () => {
    return db.query(`
    SELECT * FROM visits
    `)
}

Events.create = events => {
    return db.one(`
    INSERT INTO events
    (event_name,
    account_id,
    employee_id,
    street,
    state,
    city,
    neighborhood,
    zipcode)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [events.event_name,
        events.account_id,
        events.employee_id,
        events.street,
        events.state,
        events.city,
        events.neighborhood,
        events.zipcode])
}

Events.findByEventName = event_name => {
    return db.query(`
    SELECT * FROM events
    WHERE event_name = $1
    `, [event_name])
}

Events.findByAccountId = account_id => {
    return db.query(`
    SELECT * FROM events
    WHERE account_id = $1
    `, [account_id])
}

Events.findByEmployeeId = employee_id => {
    return db.query(`
    SELECT * FROM events
    WHERE employee_id = $1
    `, [employee_id])
}

Events.findByStreet = street => {
    return db.query(`
    SELECT * FROM events
    WHERE street = $1
    `, [street])
}

Events.findByState = state => {
    return db.query(`
    SELECT * FROM events
    WHERE state = $1
    `, [state])
}

Events.findByCity = city => {
    return db.query(`
    SELECT * FROM events
    WHERE city = $1
    `, [city])
}

Events.findByNeighborhood = neighborhood => {
    return db.query(`
    SELECT * FROM events
    WHERE neighborhood = $1
    `, [neighborhood])
}

Events.findByZipcode = zipcode => {
    return db.query(`
    SELECT * FROM events
    WHERE zipcode = $1
    `, [zipcode])
}

Events.update = (options) => {
    return db.one(`
    UPDATE events SET 
    event_name = $1,
    account_id = $2,
    employee_id = $3,
    street = $4,
    state = $5,
    city = $6,
    neighborhood = $7,
    zipcode = $8
    WHERE event_id = $9
    `, [options.event_name,
        options.account_id,
        options.employee_id,
        options.street,
        options.state,
        options.city,
        options.neighborhood,
        options.zipcode])
}

Events.delete = (event_id) => {
    return db.none(`
    DELETE FROM events
    WHERE id = $1
    `, [event_id])
}


module.exports = Events;

