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
        `, [order.refence_number,
            order.delivery_info,
            order.account_id,
            order.order_date,
            order.employee_id]);
    },
}


module.exports = User;