const db = require('../db/config');
const notes={
    create : (note) => {
        return db.one(`INSERT INTO notes
                    (relationship_id, note_type, content, date_info, employee_id)
                    VALUES ($1, $2, $3, $4, $5) RETURNING * `,
                    [note.relationship_id, note.note_type, note.content, note.date_info, note.employee_id]
                )
    }

    update : (note) => {
        return db.one(`UPDATE notes SET
                    relationship_id = $1, note_type = $2, content = $3, date_info = $4, employee_id =$5
                    WHERE note_id=$6`,
                    [note.relationship_id, note.note_type, note.content, note.date_info,
                    note.employee_id, note.note_id]
                )
    }

    findById : (note_id) => {
        return db.manyOrNone(`SELECT n.*, concat(e.first_name , ' ', e.last_name) as employee_name FROM notes n  LEFT JOIN  employees e on n.employee_id = e.emp_id WHERE note_id = $1`, [note_id])
    },

    findAllByType : (type) => {
        return db.query(`SELECT n.*, concat(e.first_name , ' ', e.last_name) as employee_name FROM notes n  LEFT JOIN  employees e on n.employee_id = e.emp_id WHERE note_type = $1`, [type])
    },

    findAllByRelationship : (note) => {
        return db.query(`SELECT n.*, concat(e.first_name , ' ', e.last_name) as employee_name FROM notes n  LEFT JOIN  employees e on n.employee_id = e.emp_id WHERE note_type= $1 and relationship_id = $2 `, [note.note_type, note.relationship_id])
    },

    delete : (note_id) => {
        return db.query(`DELETE FROM notes WHERE note_id = $1`, [note_id])
    }
}

module.exports = notes;
