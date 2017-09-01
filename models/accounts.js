const db  = require('../db/config.js');

const Account = {
    getAllAcc: () =>{
        return db.query(`
            SELECT * FROM accounts
        `);
    },

    findById: id => {
        return db.one(`
            SELECT * FROM accounts
            WHERE account_id = $1`
            ,[id]);
    },

    findByAccNum: number =>{
        return db.one(`
            SELECT * FROM accounts
            WHERE account_num = $1`
            ,[number]);
    },

    findByCompany: company =>{
        return db.one(`
            SELECT * FROM accounts
            WHERE company = $1`
            ,[company]);
    },

    createNewAcc: account =>{
        console.log(account);
        return db.one(`
            INSERT INTO accounts
            (
                account_num,
                company,
                buyer,
                street,
                state,
                city,
                neighborhood,
                zipcode,
                phone,
                email,
                delivery_day,
                delivery_time,
                premises,
                status)
            VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
            $11,$12,$13,$14)
            RETURNING *`,
            [
                account.account_num,
                account.company,
                account.buyer,
                account.street,
                account.state,
                account.city,
                account.neighborhood,
                account.zipcode,
                account.phone,
                account.email,
                account.delivery_day,
                account.delivery_time,
                account.premises,
                account.status]);
    },

    editAccount: (account,id)=>{
        return db.one(`UPDATE accounts SET
            account_num = $1,
            company = $2,
            buyer = $3,
            street = $4,
            state = $5,
            city = $6,
            neighborhood = $7,
            zipcode = $8,
            phone = $9,
            email = $10,
            delivery_day = $11,
            delivery_time = $12,
            premises = $13,
            status = $14
            WHERE account_id = $15
            RETURNING *`,
            [account.account_num, account.company,
                account.buyer, account.street, account.state,
                account.city,account.neighborhood,
                account.zipcode, account.phone, account.email,
                account.delivery_day, account.delivery_time,
                account.premises, account.status, id])
    },

    deleteAccount: id => {
        return db.one(`
            DELETE FROM accounts
            WHERE account_id = $1
            RETURNING *`,[id])
    },

    infoListAccount:id =>{
      return db.query(`SELECT content as main_info,
        date_info as date, '' as time,
        'NOTE' as info_type
        FROM notes
        WHERE note_type ='ACCOUNT' AND relationship_id=$1
        UNION ALL

        SELECT event_name as main_info,
        to_char(date_info,'yyyy-MM-dd') as date,
        to_char(time_info,'HH12:MI:SS') as time,
        'EVENT' as info_type
        FROM events
        WHERE employee_id= $1
        UNION ALL


        SELECT  to_char(cases, 'FM9999'),
        order_date as date ,
        '' as time,'ORDERS' as info_type
        FROM orders
        WHERE  employee_id= $1
        fetch first 20 rows only
        `
        )
    }

}

module.exports = Account;
