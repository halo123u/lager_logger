const db = require('../db/config');
const notes={
    create : (note) => {
        return db.one(`INSERT INTO notes
                    (relationship_id, note_type, content, date_info, employee_id)
                    VALUES ($1, $2, $3, $4, $5) RETURNING * `,
                    [note.relationship_id, note.note_type, note.content, note.date_info, note.employee_id])
        }

   update : (note) => {
        return db.one(`UPDATE notes SET
                    relationship_id = $1, note_type = $2, content = $3, date_info = $4, employee_id =$5
                    WHERE id=$6`,
                    [note.relationship_id, note.note_type, note.content, note.date_info,
                    note.employee_id, note.id])
        }

    findById : (id) => {
        return db.query(`SELECT * FROM notes WHERE id = $1`, [id])
    }

    findByType = noteId => {
  return db.query(`SELECT * FROM notes WHERE id = $1`, [noteid])
}

notes.delete = noteId => {
  return db.none(`DELETE FROM notes WHERE id = $1`, [noteId])
}
}
module.exports = notes;
