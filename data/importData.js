import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const dotenvPath = path.resolve(__dirname, "../.env");

import dotenv from "dotenv";
dotenv.config({ path: dotenvPath });

import networks from "./json/networks.json" assert { type: "json" };
import categories from "./json/categories.json" assert { type: "json" };
import brands from "./json/brands.json" assert { type: "json" };
import cars from "./json/cars.json" assert { type: "json" };
import locations from "./json/location.json" assert { type: "json" };
import interestingPoints from "./json/interestingPoints.json" assert { type : "json" }; 
import chargingStations from "./json/chargingStations.json" assert { type: "json" }; 
import team from "./json/team.json" assert { type: "json"};

import pg from 'pg';
const client = new pg.Client();


client.connect(function (err) {
    if (err) console.log(err);
    else console.log("Connected!");
});

(async () => {
        console.log("im hereeeeee");
    for (const network of networks) {
        console.log("🚀 ~ J'insere dans network la valeur : ", network.name, network.image)
        await client.query(`INSERT INTO "network" ("name", "image") VALUES ($1, $2);`, [network.name,network.image]);
    }

    for (const category of categories) {
        console.log("🚀 ~ J'insere dans category la valeur : ", category.name, category.icon)
        await client.query(
            `INSERT INTO "category"("name", "icon") VALUES ($1, $2);`, [category.name, category.icon]);
    }

    for (const brand of brands){
        console.log("🚀 ~ J'insere dans brand la valeur : ", brand.name)
        await client.query(
            `INSERT INTO "brand"("name") VALUES ($1);`,[brand.name]);
    }

    for (const car of cars){
        console.log("🚀 ~ J'insere dans car la valeur : ",car.model, car.image, car.brand_id, car.network_id)
        await client.query(
            `INSERT INTO "car"("model", "image", "brand_id", "network_id") VALUES ($1, $2, $3, $4);`,
            [car.model, car.image, car.brand_id, car.network_id]);
    }

    for (const location of locations) {
        if(location.street_number !== null){
            const label = `${location.street_number} ${location.address}, ${location.zipcode} ${location.city}` 
            console.log("🚀 ~ file: importData.js ~ line 57 ~ label", label)
            await client.query(
                `INSERT INTO "location"("label","address", "street_number", "zipcode", "city", "lat", "lon") VALUES 
                ($1, $2, $3, $4, $5, $6, $7);`,
                [label , location.address, location.street_number, location.zipcode, location.city, location.lat, location.lon]);
        } else {
            const label = `${location.address}, ${location.zipcode} ${location.city}`
            console.log("🚀 ~ file: importData.js ~ line 60 ~ label", label)
            await client.query(
                `INSERT INTO "location"("label","address", "street_number", "zipcode", "city", "lat", "lon") VALUES 
                ($1, $2, $3, $4, $5, $6, $7);`,
                [label , location.address, location.street_number, location.zipcode, location.city, location.lat, location.lon]);

        }
    }

    for (const poi of interestingPoints) {
    console.log("🚀 ~ file: importData.js ~ line 62 ~ poi", poi)
        
        await client.query(
            `INSERT INTO "interesting_point"("name", "description", "eco_friendly", "category_id", "location_id")
            VALUES($1, $2, $3, $4, $5)`, [poi.name, poi.description, poi.eco_friendly, poi.category_id, poi.location_id]
        )
    }

    for (const chargingStation of chargingStations) {
        console.log("🚀 ~ J'insère dans charging stations", chargingStation)
            
            await client.query(
                `INSERT INTO "charging_station"("network_id", "location_id")
                VALUES($1, $2)`, [chargingStation.network_id, chargingStation.location_id]
            )
        }

    for ( const member of team ){
        console.log("🚀 ~J insere dans member : ", member)
        await client.query(
            `INSERT INTO "team"("name", "description", "image")
            VALUES($1, $2, $3)`, [ member.name, member.description, member.image ]
            )
    } 
    
    await client.end();
})();