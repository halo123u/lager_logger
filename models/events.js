const db = require('../db/config');

const Events = {}

Events.findAll = () => {
    return db.query(`
    SELECT * FROM events
    `)
}

Events.create = events => {
    return db.one(`
    INSERT INTO events
    (event_name,
    account_id,
    employee_id,
    date_info,
    time_info,
    state,
    street,
    city,
    zipcode,
    additional_info)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *
    `, [events.event_name,
        events.account_id,
        events.employee_id,
        events.date_info,
        events.time_info,
        events. state,
        events.street,
        events.city,
        events.zipcode,
        events.additional_info])
}

Events.findById = event_id => {
    return db.one (`
    SELECT * FROM events
    WHERE event_id = $1 
    `, [event_id]);
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

Events.findByZipcode = zipcode => {
    return db.query(`
    SELECT * FROM events
    WHERE zipcode = $1
    `, [zipcode])
}

Events.update = (options, event_id) => {
    return db.none(`
    UPDATE events SET 
    event_name= $1,
    account_id= $2,
    employee_id= $3,
    date_info= $4,
    time_info= $5,
    state= $6,
    street= $7,
    city= $8,
    zipcode= $9,
    additional_info = 10
    WHERE event_id = $11
    `, [options.event_name,
        options.account_id,
        options.employee_id,
        options.street,
        options.state,
        options.city,
        options.neighborhood,
        options.zipcode,
        options.additonal_info,
        options.date_info,
        event_id])
}

Events.delete = (event_id) => {
    return db.none(`
    DELETE FROM events
    WHERE event_id = $1
    `, [event_id])
}


module.exports = Events;

