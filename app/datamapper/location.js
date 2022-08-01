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

export { findAll, findOneLocation, findOrCreateData };
