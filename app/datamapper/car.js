//~ IMPORTATIONS DES MODULES
import { client } from "../service/dbClient.js";

const TABLE_NAME = "car";

//~ ------------------------------------------------------------------- FIND ALL CARS
async function findAll() {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`);

    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE CAR

async function findOne(carId) {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [carId]);

    return result.rows[0];
}

//~---------------------------------------------------------------------CREATE CAR

async function createData(carData) {
    let { brand, model, image } = carData;

    const sql = {
        text: `INSERT INTO "${TABLE_NAME}"
              ("brand","model","image" "network_id")
          VALUES
              ($1,$2,$3,$4);`,
        values: [brand, model, image, network_id],
    };

    const result = await client.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------------------UPDATE CAR

async function updateData(carId, carData) {
    const { brand, model, image, network_id } = carData;

    const sql = {
        text: `
          UPDATE "${TABLE_NAME}"
              SET
              "brand" = $1,
              "model" = $2,
              "image" = $3,
              "network_id" = $4
          WHERE "id" = $5;`,
        values: [brand, model, image, network_id, carId],
        //Autre manière de faire si on créée une fonction
        //dans la DB et on aura juste à faire

        //text: `SELECT update_car($1, $2)`;
        //values: [carId, carData]
    };

    const result = await client.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------DELETE CAR

async function deleteData(carId) {
    const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [carId]);

    return result.rowCount;
}

export { findAll, findOne, createData, updateData, deleteData };
