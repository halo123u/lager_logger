const db = require('../db/config');

const Orders = {}

Orders.create = order => {
    return db.one(`
        INSERT INTO orders
        (refence_number,
        delivery_info,
        account_id,
        order_date,
        employee_id)
        VALUES
        ($1,$2,$3,$4,$5)
        RETURNING *
    `, [order.refence_number,
        order.delivery_info,
        order.account_id,
        order.order_date,
        order.employee_id]);
},


// ------------------- Finders --------------------------
Orders.findAll= (employee_id) => {
    return db.query(`
        SELECT * FROM orders
        WHERE employee_id = $1
    `, [employee_id])
},


// if query.selector is empty string, will just skip
Orders.findBy= (query, employee_id) => {
    return db.query(`
        SELECT * FROM orders
        WHERE 
        (refence_number=$1 OR
        delivery_info=$2 OR
        account_id=$3 OR
        order_date=$4 OR
        employee_id=$5)  
    `,[query.refence_number || '',
        query.delivery_info || '',
        query.account_id || '',
        query.order_date || '',
        employee_id || ''])
}



// think about and queries

// Orders.findByReferenceNumber= refNum => {
//     return db.query(`
//         SELECT * FROM orders
//         WHERE refence_number = $1
//     `,[refNum])
// },
// Orders.findByAccountId= account_id => {
//     return db.many(`
//         SELECT * FROM orders
//         WHERE account_id = $1
//     `,[account_id])
// },
// Orders.findByDeliveryInfo= delivery_info => {
//     return db.many(`
//         SELECT * FROM orders
//         WHERE delivery_info = $1
//     `,[delivery_info])
// },
// Orders.findByOrderDate= order_date => {
//     return db.many(`
//         SELECT * FROM orders
//         WHERE order_date = $1
//     `,[order_date])
// },
// Orders.findByEmployeeId= employee_id => {
//     return db.many(`
//         SELECT * FROM orders
//         WHERE employee_id = $1
//     `,[employee_id])
// },



Orders.update = (options) => {
    return db.one(`
        UPDATE orders SET
        refence_number = $1,
        delivery_info = $2,
        account_id = $3,
        order_date = $4,
        employee_id = $5
        WHERE order_id = $6
    `,[options.refence_number,
        options.delivery_info,
        options.account_id,
        options.order_date,
        options.employee_id,
        options.order_id])
}

Orders.delete = (order_id) => {
    return db.none(`
        DELETE FROM orders
        WHERE id = $1
    `, [order_id])
}







module.exports = Orders;