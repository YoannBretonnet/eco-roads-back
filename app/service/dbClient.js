// ~ *** *** PG CONNEXION DATABASE *** *** ~ //
// ~ ************************************* ~ //

import pg from "pg";
const { Pool } = pg;

const localPoolConfig = {
    user: "ecoroads",
    password: "ecoroads",
    host: "localhost",
    port: 5432,
    database: "ecoroads",
};

// const poolConfig = process.env.DATABASE_URL ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } } : localPoolConfig;

const pool = new Pool(localPoolConfig);

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
// });

// pool.connect();
// .then( () => logger('DB connection is live.'))
// .catch((err) => logger('DB connection failed.', err));

export default pool;
