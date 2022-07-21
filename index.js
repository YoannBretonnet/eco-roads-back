// ~ *** *** ENVIRONMENT CONFIG *** *** ~ //
// ~ ********************************** ~ //

import 'dotenv/config';

// ~ *** *** EXPRESS CONFIG *** *** ~ //
// ~ ****************************** ~ //

import express, {json} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { router } from './app/router/index.js';

const app = express();

// If you have your node.js behind a proxy and are using secure: true, you need to set 'trust proxy' in express
// app.set('trust proxy', 1) // trust first proxy

// ~ *** *** SESSION CONFIG *** *** ~ //
// ~ ****************************** ~ //

import session from 'express-session';

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: { 
        // secure : true,
        httpOnly : true,
        sameSite: 'lax', // or 'strict'
        maxAge: 24 * 60 * 60 * 1000 //24 hours
        //expires : new Date(Date.now() + 60 * 60 * 1000) //1 hour
        }
}));



const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT ?? 5000;
const corsOptions = { credentials:true, origin: process.env.URL || '*'};


app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')));

app.use(router)

// ~ *** *** LAUNCHER CONFIG *** *** ~ //
// ~ ******************************* ~ //

app.use(router);

app.listen(PORT, ()=>{
    console.log(` \x1b[1;33m⚡⚡ http://localhost:${PORT} ⚡⚡ \x1b[0m`)
});