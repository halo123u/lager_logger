const db = require('../db/config');
const notes={
    create : (note) => {
        return db.one(`INSERT INTO notes
                    (relationship_id,
                    note_type,
                    content,
                    date_info,
                    employee_id)
                    VALUES ($1, $2, $3, $4, $5) RETURNING * `,
                    [note.relationship_id,
                    note.note_type,
                    note.content,
                    note.date_info,
                    note.employee_id]
                )
    },

    update : (note) => {
        return db.none(`UPDATE notes SET
                    content = $1,
                    date_info = $2, employee_id =$3
                    WHERE note_id=$4`,
                    [note.content,
                    note.date_info,
                    note.employee_id,
                    note.note_id]
                )
    },

    findById : (note_id) => {
        return db.one(`SELECT n.*,
                          concat(e.first_name , ' ', e.last_name) as employee_name
                          FROM notes n  LEFT JOIN  employees e on n.employee_id = e.emp_id
                          WHERE note_id = $1`, [note_id])
    },

    findAllByType : (note_type) => {
        return db.query(`SELECT n.*,
                        concat(e.first_name , ' ', e.last_name) as employee_name
                        FROM notes n  LEFT JOIN  employees e on n.employee_id = e.emp_id
                        WHERE note_type = $1`, [note_type])
    },

    findAllByRelationship : (note) => {
        var join="";
        var columnSelect="";
        switch(note.note_type) {
            case "EMP":
                join=" INNER JOIN employees e2 on n.relationship_id= e2.emp_id    "
                columnSelect= " concat(e2.first_name , ' ', e2.last_name) as receiver "
                break;

            case "ORD":
                join=" INNER JOIN orders    o on n.relationship_id= o.order_id   "
                columnSelect= " refence_number as receiver"
                break;

            case "SAL":
                join=" INNER JOIN sales    s on n.relationship_id= s.sales_id   "
                columnSelect= " refence_number as receiver"
                break;

            case "ACC":
                join=" INNER JOIN accounts  a on n.relationship_id= a.account_id "
                columnSelect= " company as receiver,account_num "
                break;

            default:
                join =""
                columnSelect=""
        }
        return db.query(`SELECT n.*,
                        concat(e.first_name , ' ', e.last_name) as employee_name, ${columnSelect}
                        FROM notes n ${join} LEFT JOIN  employees e on n.employee_id = e.emp_id
                        WHERE note_type= $1 and relationship_id = $2 `,
                        [note.note_type, note.relationship_id])
    },

    delete : (note_id) => {
        return db.query(`DELETE FROM notes WHERE note_id = $1`, [note_id])
    },

    findAllWithCompany : ()  => {
        return db.query(`
            SELECT * FROM notes JOIN accounts ON
            notes.relationship_id = accounts.account_id
            WHERE notes.note_type = 'ACCOUNT'
        `)
    }
}

module.exports = notes;
