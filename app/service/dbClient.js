// ~ *** *** PG CONNEXION DATABASE *** *** ~ //
// ~ ************************************* ~ //

import pg from "pg";

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false }
// })

const pool = new pg.Pool();
pool.connect()
    .then( () => console.log('DB connected') )
    .catch((err) => console.log('DB connection failed', err));

export default pool;
