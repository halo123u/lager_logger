const db = require('../db/config');
const notes={
    create : (note) => {
        var d = new Date();
        console.log(note.employee_id)
        return db.one(`INSERT INTO notes
                    (relationship_id,
                    note_type,
                    content,
                    date_info,
                    time_info,
                    employee_id)
                    VALUES ($1, $2, $3, $4, $5, $6) RETURNING * `,
                    [note.relationship_id,
                    note.note_type,
                    note.content,
                    d.getFullYear() +"/"+d.getMonth()+"/"+d.getDate(),
                    d.getHours() +":"+d.getMinutes()+":"+d.getSeconds(),
                    note.employee_id]
                )
    },

    update : (note) => {
        var d = new Date();
        return db.none(`UPDATE notes SET
                    content = $1,
                    date_info = $2,
                    time_info = $3,
                    employee_id =$4
                    WHERE note_id=$5`,
                    [note.content,
                    d.getFullYear() +"/"+d.getMonth()+"/"+d.getDate(),
                    d.getHours() +":"+d.getMinutes()+":"+d.getSeconds(),
                    note.employee_id,
                    note.note_id]
                )
    },

    findById : (note_id) => {
        return db.one(`SELECT n.*,
                        CASE
                            WHEN (a.account_id IS NOT NULL AND n.note_type='ACC')  THEN
                                a.company
                            WHEN (o.order_id   IS NOT NULL AND n.note_type='ORD')  THEN
                                to_char(o.cases, 'FM9999')
                            WHEN (e.first_name       IS NOT NULL AND n.note_type='EMP')  THEN e.first_name
                            ELSE 'n/a'
                        END AS main_info,
                        CASE
                            WHEN (a.account_id IS NOT NULL AND n.note_type='ACC')  THEN
                                a.account_num
                            WHEN (o.order_id   IS NOT NULL AND n.note_type='ORD')  THEN
                                o.refence_number
                            WHEN (e.first_name       IS NOT NULL AND n.note_type='EMP')  THEN e.last_name
                        ELSE 'n/a'
                        END AS sec_info
                        FROM notes n
                        LEFT JOIN accounts  a on n.relationship_id = a.account_id and n.note_type='ACC'
                        LEFT JOIN orders    o on n.relationship_id = o.order_id and n.note_type='ORD'
                        LEFT JOIN employees e on n.relationship_id = e.emp_id and n.note_type='EMP'
                        WHERE n.note_id = $1`, [note_id])
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
            WHERE notes.note_type = 'ACC'
        `)
    }
}

module.exports = notes;
