import pool from "../service/dbClient.js";

const TABLE_NAME = "car";

//~ ------------------------------------------------------------------- FIND ALL CARS

async function findAll() {
    const result = await pool.query(
        `SELECT car.id, car.model, car.image, brand_id, network.name FROM ${TABLE_NAME} JOIN network ON network.id = car.network_id;`,
    );

    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE CAR

async function findOne(carId) {
    const result = await pool.query(
        `SELECT c.brand_id, brand.name AS brandName, c.id, c.model, c.image, n.name FROM car AS c JOIN network AS n ON n.id = c.network_id JOIN brand ON brand.id = c.brand_id WHERE c.id = $1;`,
        [carId]
    );

    return result.rows[0];
}

//~---------------------------------------------------------------------CREATE CAR

async function createData(carData) {
    let { brand_id, model, image } = carData;

    const sql = {
        text: `INSERT INTO "${TABLE_NAME}"

            ("brand_id","model","image" "network_id")
            VALUES
            ($1,$2,$3,$4);`,
        values: [brand_id, model, image, network_id],
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------------------UPDATE CAR

async function updateData(carId, carData) {
    const { brand_id, model, image, network_id } = carData;

    const sql = {
        text: `
            UPDATE "${TABLE_NAME}"
                SET
                "brand_id" = $1,
                "model" = $2,
                "image" = $3,
                "network_id" = $4
            WHERE "id" = $5;`,
        values: [brand_id, model, image, network_id, carId],
        //Autre manière de faire si on créée une fonction
        //dans la DB et on aura juste à faire

        //text: `SELECT update_car($1, $2)`;
        //values: [carId, carData]
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------DELETE CAR

async function deleteData(carId) {
    const result = await pool.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [carId]);

    return result.rowCount;
}

export { findAll, findOne, createData, updateData, deleteData };
