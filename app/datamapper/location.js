import pool from "../service/dbClient.js";

const TABLE_NAME = "location";

async function findAll() {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME};`);
    return result.rows;
}

async function findOneLocation(lat, lon) {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME} WHERE lat = $1 AND lon = $2;`, [
        lat,
        lon,
    ]);
    return result.rows;
}

async function findOrCreateData(location) {
    if (location.Lat !== undefined) {
        const existingLocation = await pool.query(
            `SELECT * FROM ${TABLE_NAME} WHERE lat = $1 AND lon = $2;`,
            [location.Lat, location.Long],
        );
        if (existingLocation.rowCount !== 0) {
            return existingLocation.rows[0].id;
        } else {
            const preparedQuery = {
                text: `INSERT INTO public."location"("address", "street_number","zipcode", "city", "lat", "lon", "label")
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`,
                values: [
                    location.address,
                    location.street_number,
                    location.zipcode,
                    location.city,
                    location.Lat,
                    location.Long,
                    location.label
                ],
            };
            
        await pool.query(preparedQuery);
            
        const existingLocation = await pool.query(
            `SELECT * FROM ${TABLE_NAME} WHERE lat = $1 AND lon = $2;`, [location.Lat, location.Long])
            
        return existingLocation.rows[0].id;
        }
    }
}

async function getAllLocationByCategory(){
    const result = await pool.query(`SELECT interesting_point.name, location.lon, location.lat 
    FROM interesting_point 
    JOIN category ON category.id = interesting_point.category_id 
    JOIN location ON location.id = interesting_point.location_id
    WHERE category_id = 5 OR category_id = 6 OR category_id = 3  OR category_id = 4;`)
console.log("🚀 ~ file: geolib.js ~ line 52 ~ result", result.rows)
    return result.rows
}

export { findAll, findOneLocation, findOrCreateData, getAllLocationByCategory };
