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

import { router } from './router/index.js';
import authRouter from './ROUTER/auth-routes.js';

const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT ?? 5000;
const corsOptions = { credentials:true, origin: process.env.URL || '*'};


app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')));

// app.use(router)
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);

// ~ *** *** LAUNCHER CONFIG *** *** ~ //
// ~ ******************************* ~ //

app.use(router);

app.listen(PORT, ()=>{
    console.log(` \x1b[1;33m⚡⚡ http://localhost:${PORT} ⚡⚡ \x1b[0m`)
});