

//~ IMPORTATIONS DES MODULES
import pool from "../service/dbClient.js";

const TABLE_NAME = "user";

// ~ *** *** FIND ALL USERS *** *** ~ //
// ~ ****************************** ~ //
async function findAll() {
    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}";`);

    return result.rows;
}

// ~ *** *** FIND ONE USER *** *** ~ //
// ~ ***************************** ~ //

async function findOne(email, COLUMN_NAME) {

    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}" WHERE ${COLUMN_NAME} = $1;`, [email]);

    return result;
}

// ~ *** *** CREATE USER *** *** ~ //
// ~ *************************** ~ //

async function createData(userData) {
    let { email, password, username, location_id, car_id } = userData;

    const sql = {
        text: `INSERT INTO "${TABLE_NAME}"
                ("email","password","username",location_id, "car_id")
                VALUES
                ($1,$2,$3,$4, $5);`,
        values: [email, password, username, location_id, car_id],
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

// ~ *** *** UPDATE USER *** *** ~ //
// ~ *************************** ~ //

async function updateData(userId, userData) {
    const { email, password, username, location_id, car_id } = userData;

    const sql = {
        text: `
            UPDATE "${TABLE_NAME}"
                SET
                "email" = $1,
                "password" = $2,
                "username" = $3,
                "location_id" = $4,
                "car_id" = $5
            WHERE "id" = $6;`,
        values: [email, password, username, location_id, car_id, userId],
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------DELETE CAR

async function deleteData(userId) {
    const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [userId]);

    return result.rowCount;
}

export { findAll, findOne, createData, updateData, deleteData };
