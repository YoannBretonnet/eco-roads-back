import { _500 } from "./errorController.js";
import pool from "../service/dbClient.js";

async function fetchAllTeamate(req, res) {
    try {
        const team = await pool.query(`SELECT * FROM team;`);
        res.status(200).json(team.rows);
    } catch (err) {
        _500(err, req, res);
    }
}

export { fetchAllTeamate };
