const db = require('../db/config');

const Orders = {
    create : order => {
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
    findByReferenceNumber: refNum => {
        return db.many(`
            SELECT * FROM orders
            WHERE refence_number = $1
        `,[refNum])
    },
    findByAccountId: account_id => {
        return db.many(`
            SELECT * FROM orders
            WHERE account_id = $1
        `,[account_id])
    },
    findByDeliveryInfo: delivery_info => {
        return db.many(`
            SELECT * FROM orders
            WHERE delivery_info = $1
        `,[delivery_info])
    },
    findByOrderDate: order_date => {
        return db.many(`
            SELECT * FROM orders
            WHERE order_date = $1
        `,[order_date])
    },
    findByEmployeeId: employee_id => {
        return db.many(`
            SELECT * FROM orders
            WHERE employee_id = $1
        `,[employee_id])
    },
}


module.exports = User;