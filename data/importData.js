import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const dotenvPath = path.resolve(__dirname, "../.env");

import dotenv from "dotenv";
dotenv.config({ path: dotenvPath });

// import networks from "./json/networks.json" assert { type: "json" };
// import categories from "./json/categories.json" assert { type: "json" };
// import brands from "./json/brands.json" assert { type: "json" };
// import cars from "./json/cars.json" assert { type: "json" };
// import interesting_points from "./json/interesting_points.json" assert { type: "json" };
import locations from "./json/locations.json" assert { type: "json" };
import charging_stations from "./json/charging_stations.json" assert { type: "json" }; 

import pg from 'pg';
const client = new pg.Client();


client.connect(function (err) {
    if (err) console.log(err);
    else console.log("Connected!");
});

(async () => {
    // for (const network of networks) {
    //     console.log("🚀 ~ J'insere dans network la valeur : ", network.name)
    //     await client.query(`INSERT INTO "network" ("name") VALUES ($1);`, [network.name]);
    // }

    // for (const category of categories) {
    //     console.log("🚀 ~ J'insere dans category la valeur : ", category.name)
    //     await client.query(
    //         `INSERT INTO "category"("name") VALUES ($1);`, [category.name]);
    // }

    // for (const brand of brands){
    //     console.log("🚀 ~ J'insere dans brand la valeur : ", brand.name)
    //     await client.query(
    //         `INSERT INTO "brand"("name") VALUES ($1);`,[brand.name]);
    // }

    // for (const car of cars){
    //     console.log("🚀 ~ J'insere dans car la valeur : ",car.model, car.image, car.brand_id, car.network_id)
    //     await client.query(
    //         `INSERT INTO "car"("model", "image", "brand_id", "network_id") VALUES ($1, $2, $3, $4);`,
    //         [car.model, car.image, car.brand_id, car.network_id]);
    // }

    for (const location of locations) {
        if(location.street_number !== null){
            const label = `${location.street_number} ${location.address}, ${location.zipcode} ${location.city}` 
            console.log("🚀 ~ file: importData.js ~ line 57 ~ label", label)
        } else {
            const label = `${location.address}, ${location.zipcode} ${location.city}`
            console.log("🚀 ~ file: importData.js ~ line 60 ~ label", label)
        }
        // console.log(" J insere dans location : ", location.address, location.street_number, location.zipcode, location.city, location.lat, location.lon);
        // await client.query(
        //     `INSERT INTO "location"("label","address", "street_number", "zipcode", "city", "lat", "lon") VALUES 
        //     ($1, $2, $3, $4, $5, $6, $7);`,
        //     [`${label}` , location.address, location.street_number, location.zipcode, location.city, location.lat, location.lon]);
    }

    // for (const poi of interesting_points) {
    // console.log("🚀 ~ file: importData.js ~ line 62 ~ poi", poi)
        
    //     await client.query(
    //         `INSERT INTO "interesting_point"("name", "description", "eco_friendly", "category_id", "location_id")
    //         VALUES($1, $2, $3, $4, $5)`, [poi.name, poi.description, poi.eco_friendly, poi.category_id,poi.location_id]
    //     )
    // }

    // for (const chargingStation of charging_stations) {
    //     console.log("🚀 ~ J'insère dans charging stations", chargingStation)
            
    //         await client.query(
    //             `INSERT INTO "charging_station"("network_id", "location_id")
    //             VALUES($1, $2)`, [chargingStation.network_id, chargingStation.location_id]
    //         )
    //     }
    
    await client.end();
})();