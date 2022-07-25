import { json } from "express";
import pool from "../service/dbClient.js";

const TABLE_NAME = "car";

//~ ------------------------------------------------------------------- FIND ALL CARS

async function findAll() {
    // const result = await pool.query(`SELECT * FROM "${TABLE_NAME}";`);

    const brands = await pool.query(`SELECT brand.name FROM brand;`);
    // console.log("🚀 ~ file: car.js ~ line 12 ~ findAll ~ brands", brands)
    const cars = await pool.query(`SELECT * FROM car;`); 
    // console.log("🚀 ~ file: car.js ~ line 14 ~ findAll ~ cars", cars)

    const test = json({brands: brands.rows, cars: cars.rows})
    console.log("🚀 ~ file: car.js ~ line 15 ~ findAll ~ test", test)
    return json(test)
    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE CAR

async function findOne(carId) {
    // const result = await pool.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [carId]);
    const brand = await pool.query(
        `SELECT brand.name, car.model FROM brand INNER JOIN car ON car.brand_id = brand.id WHERE "brand_id" = $1;`,
        [carId]);
    return testCar.rows[0];
    // return result.rows[0];
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
