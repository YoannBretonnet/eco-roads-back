import pool from "../service/dbClient.js";

const TABLE_NAME = "interesting_point";

//~ ------------------------------------------------------------------- FIND ALL INTERESTING POINT

async function findAll() {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME};`);
    return result.rows;
}

//~---------------------------------------------------------------------FIND ONE INTERESTING POINT

async function findOneInterestingPoint(interestingPointId) {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME} WHERE "id" = $1`, [interestingPointId]);
    return result.rows;
}

//~---------------------------------------------------------------------FIND ALL INTERESTING POINT & LOCATION BY CATEGORY

async function getAllInterestingPointByCategory(){
    const result = await pool.query(`SELECT interesting_point.image, interesting_point.name, interesting_point.description, 
    location.street_number, location.address, location.city, location.zipcode, interesting_point.icone, location.lon, location.lat
    FROM interesting_point 
    JOIN category ON category.id = interesting_point.category_id 
    JOIN location ON location.id = interesting_point.location_id
    WHERE (category.id = $1) OR (category.id IN ($1, $2)) OR (category.id IN ($1, $2, $3))`)
    return result.rows
}

export { findAll, findOneInterestingPoint, getAllInterestingPointByCategory };