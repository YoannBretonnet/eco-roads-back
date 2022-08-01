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

// import pool from "../app/service/dbClient.js";
// import pg from 'pg';
// const client = new pg.Client({
//     connectionString:process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });
git 


// client.connect(function (err) {
//     if (err) console.log(err);
//     else console.log("Connected!");
// });

(async () => {
    for (const network of networks) {
        console.log("🚀 ~ J'insere dans network la valeur : ", network.name)
        await client.query(`INSERT INTO "network" ("name") VALUES ($1);`, [network.name]);
    }

    for (const category of categories) {
        console.log("🚀 ~ J'insere dans category la valeur : ", category.name)
        await client.query(
            `INSERT INTO "category"("name") VALUES ($1);`, [category.name]);
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
    await client.end();
})();