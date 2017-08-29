const db = require('../db/config');

const Sale = {}


Sale.create = sale => {
    return db.one(`
        INSERT INTO sales
        (order_id,
        cases,
        date_info)
        VALUES
        ($1,$2,$3)
    `,[sale.order_id,
        sale.cases,
        sale.date_info])
}


Sale.findByOrderId = order_id => {
    return db.query(`
        SELECT * FROM sales
        WHERE order_id = $1
    `,[order_id])
}
Sale.findByCases = cases => {
    return db.query(`
        SELECT * FROM sales
        WHERE cases = $1
    `,[cases])
}
Sale.findByMoment = moment => {
    return db.query(`
        SELECT * FROM sales
        WHERE date_info = $1
    `,[moment])
}
module.exports = Sale;