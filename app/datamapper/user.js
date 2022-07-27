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

async function findOne(email, columnName) {
    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}" WHERE "${columnName}" = $1;`, [
        email,
    ]);

    return result;
}

// ~ *** *** CREATE USER *** *** ~ //
// ~ *************************** ~ //

async function createData(userData) {
    let { email, password, username, location, car_id } = userData;

    if (isNaN(location)) {
        const queryPrepared = {
            text: `INSERT INTO "location"("address", "street_number","zipcode", "city", "lat", "lon")
                    VALUES ($1, $2, $3, $4, $5, $6);`,
            values: [
                location.address,
                location.street_number,
                location.zip_code,
                location.city,
                location.Lat,
                location.Long,
            ],
        };
        await pool.query(queryPrepared);

        const locationCreatedID = await pool.query(
            `SELECT location.id FROM "location" WHERE lat = ${location.Lat} AND lon = ${location.Long};`
        );

        const sql = {
            text: `INSERT INTO "${TABLE_NAME}"
                        ("email","password","username",location_id, "car_id")
                        VALUES
                        ($1,$2,$3,$4,$5);`,
            values: [email, password, username, locationCreatedID, car_id],
        };

        const result = await pool.query(sql);
        return result.rowCount;
    } else {
        const sql = {
            text: `INSERT INTO "${TABLE_NAME}"
                ("email","password","username",location_id, "car_id")
                VALUES
                ($1,$2,$3,$4,$5);`,
            values: [email, password, username, location, car_id],
        };

        const result = await pool.query(sql);

        return result.rowCount;
    }
}

// ~ *** *** UPDATE USER *** *** ~ //
// ~ *************************** ~ //

async function updateData(userId, userData) {
    const { email, password, username, location, car_id, categories } = userData;
    
    const updateUsername = username ? username : "";
    const updateLocationId = location ? location : "";
    const updateCarId = car_id ? car_id : "";
    // const updateCategories = categories ? categories : "";
    //CHECK Creer les conditions pour controller


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
        values: [email, password, updateUsername, updateLocationId, updateCarId, userId],
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------DELETE CAR

async function deleteData(userId) {
    //const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [userId]);
    const result = await client.query(
        `DELETE FROM "${TABLE_NAME}" WHERE "id" = "7a793611-e188-4b2a-a981-7803f0bd1265";`,
    );

    return result.rowCount;
}

export { findAll, findOne, createData, updateData, deleteData };
