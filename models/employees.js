const db = require("../db/confis");

const Employees = {
    create:(employee)=> {
        db.one(`INSERT INTO
                employees(user_type, username, password, first_name, last_name, email, phone)
                values($1, $2, $3, $4, $5, $6, $7) RETURNING * `,
                [employee.user_type, employee.username, employee.password, employee.first_name,
                 employee.last_name, employee.email, employee.phone])
    }

    update:(employee)=> {
        db.one(`UPDATE employees set
                user_type   =$1,
                username    =$2,
                first_name  =$3,
                last_name   =$4,
                email       =$5,
                phone       =$6 WHERE emp_id=$2`, )
    }

    changePassword : (employee)=> {
        db.one(`UPDATE employees set
                password    =$1,
                WHERE emp_id=$2`,[employee.newPassword,employee.emp_id])
    }

    findAll: function(){
        return db.query(`SELECT *, concat(firstname , ' ', lastname) as fullname
                        FROM employees`)
    },

    findByUserName : (userName) => {
        return db.manyOrNone(`SELECT * FROM employees
                            WHERE username = $1`, [userName]);
    },

    findByUserId : (id) => {
        return db.one(`SELECT * FROM employees
                    WHERE emp_id = $1`, [id]);
    }
}

module.exports = Employees;

