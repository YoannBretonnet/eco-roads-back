import pool from "../service/dbClient.js";

const TABLE_NAME = "interesting_point";

//~ ------------------------------------------------------------------- FIND ALL INTERESTING POINT

// async function findAll() {
//     const result = await pool.query(`SELECT * FROM ${TABLE_NAME};`);
//     return result.rows;
// }

//~---------------------------------------------------------------------FIND ONE INTERESTING POINT

async function findOneInterestingPoint(interestingPointId) {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME} WHERE "id" = $1`, [
        interestingPointId,
    ]);
    return result.rows;
}

//~---------------------------------------------------------------------FIND ALL INTERESTING POINT & LOCATION BY CATEGORY

async function getAllInterestingPointByCategory(categories) {
    const result = await pool.query(
    `SELECT ip.image, ip.name, ip.description, location.label, category.icon, json_build_object('lat', location.lat, 'lon', location.lon) AS coordinates
    FROM Interesting_point AS ip
    JOIN category ON category.id = ip.category_id
    JOIN location ON ip.location_id = location.id
    WHERE category.id IN ($1, $2, $3)
    GROUP BY ip.image, ip.name, ip.description, location.label, location.lat, location.lon, category.icon
    ORDER BY location.lat ASC
    `,
        [categories[0], categories[1], categories[2]],
    );
    return result.rows;
}

async function getAllChargingStationByCar(car_id) {
    const result = await pool.query(
        `
    SELECT network.name, location.label, json_build_object('lat', location.lat, 'lon', location.lon) AS coordinates
        FROM car
        JOIN network ON network.id = car.network_id
        JOIN charging_station ON network.id = charging_station.network_id
        JOIN location ON charging_station.location_id = location.id 
        WHERE car.id = $1`,
        [car_id],
    );
    return result.rows;
}

export { findOneInterestingPoint, getAllInterestingPointByCategory, getAllChargingStationByCar };
