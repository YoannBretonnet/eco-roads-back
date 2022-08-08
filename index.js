// ~ *** *** ENVIRONMENT CONFIG *** *** ~ //
// ~ ********************************** ~ //
import "dotenv/config";

// ~ *** *** EXPRESS CONFIG *** *** ~ //
// ~ ****************************** ~ //
import express from "express";

import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";

import { router } from "./app/router/index.js";

const app = express();
app.use(helmet());

// ~ *** *** SWAGGER CONFIG *** *** ~ //
// ~ ****************************** ~ //
import { specs, serve, setup, cssOptions } from "./swaggerDocs/swaggerDocs.js";
app.use("/api-docs", serve, setup(specs, cssOptions));

// If you have your node.js behind a proxy and are using secure: true, you need to set 'trust proxy' in express
app.set("trust proxy", 1); // trust first proxy

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 5000;
const corsOptions = {
    withCredentials: true,
    origin: ["https://e-co-roads.netlify.app", "http://localhost:8080"],
    method: ["GET", "POST", "PATCH", "DELETE"],
    responseHeader: ["Content-Type", "Origin", "X-Requested-With", "Authorization"],
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions));
app.set("trust proxy", 1);

// ~ *** *** SESSION CONFIG *** *** ~ //
// ~ ****************************** ~ //

import session from "express-session";
app.use(
    session({
        saveUninitialized: true,
        resave: true,
        proxy: true,
        secret: process.env.SESSION_SECRET,
        cookie: {
            httpOnly: true,
            sameSite: "none", // or 'strict'
            maxAge: 24 * 60 * 60 * 1000, //24 hours
        },
    })
);

// ~ *** *** PARSER CONFIG *** *** ~ //
// ~ ***************************** ~ //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(join(__dirname, "public")));

// ~ *** *** LAUNCHER CONFIG *** *** ~ //
// ~ ******************************* ~ //
app.use(router);
console.log(" JE SUIS DANS L INDEX");

app.listen(PORT, () => {
    console.log(` \x1b[1;33m⚡⚡ http://localhost:${PORT} ⚡⚡ \x1b[0m`);
});
