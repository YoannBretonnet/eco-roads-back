import pool from "../service/dbClient.js";


const TABLE_NAME = "brand";

//~ ------------------------------------------------------------------- FIND ALL BRANDS

async function findAll() {
    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}";`);

    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE BRAND

async function findOne(brandId) {

    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [brandId]);

    return result.rows[0];
}

//~---------------------------------------------------------------------CREATE BRAND

async function createData(brandData) {
    let { name } = brandData;

    const sql = {
        text: `INSERT INTO "${TABLE_NAME}"

              ("name")
          VALUES
              ($1);`,
        values: [name],
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------------------UPDATE BRAND

async function updateData(brandId, brandData) {
    const { name } = brandData;

    const sql = {
        text: `
          UPDATE "${TABLE_NAME}"
              SET
              "name" = $1,
          WHERE "id" = $2;`,
        values: [name, brandId],
        //Autre manière de faire si on créée une fonction
        //dans la DB et on aura juste à faire

        //text: `SELECT update_car($1, $2)`;
        //values: [carId, carData]
    };

    const result = await pool.query(sql);

    return result.rowCount;
}

//~----------------------------------------------------------DELETE BRAND

async function deleteData(brandId) {

    const result = await pool.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [brandId]);

    return result.rowCount;
}

export { findAll, findOne, createData, updateData, deleteData };