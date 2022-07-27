// ~ *** *** PG CONNEXION DATABASE *** *** ~ //
// ~ ************************************* ~ //

import pg from "pg";

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false }
// })

// Configuration pour utiliser la BDD en locale, mettre les variables dans le .env
// PGHOST=localhost
// PGDATABASE=
// PGUSER=
// PGPASSWORD=
// PGPORT=port

const pool = new pg.Pool();
pool.connect()
    .then( () => console.log('DB connected Localhost') )
    .catch((err) => console.log('DB connection failed', err));

export default pool;
