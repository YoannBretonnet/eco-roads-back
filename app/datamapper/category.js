
import pool from "../service/dbClient.js";


const TABLE_NAME = "category";

//~ ------------------------------------------------------------------- FIND ALL CATEGORIES

async function findAll() {
    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}";`);

    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE CATEGORY

async function findOne(categoryId) {

    const result = await pool.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [categoryId]);

    return result.rows[0];
}

export { findAll, findOne}