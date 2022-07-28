// ~ *** *** ENVIRONMENT CONFIG *** *** ~ //
// ~ ********************************** ~ //
import "dotenv/config";

// ~ *** *** EXPRESS CONFIG *** *** ~ //
// ~ ****************************** ~ //
import express from "express";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
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
// const corsOptions = { credentials: true, origin: "https://e-co-roads.netlify.app" };

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "https://e-co-roads.netlify.app");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept",
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// app.use(cors(corsOptions));

// ~ *** *** PARSER CONFIG *** *** ~ //
// ~ ***************************** ~ //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(join(__dirname, "public")));

// ~ *** *** LAUNCHER CONFIG *** *** ~ //
// ~ ******************************* ~ //
app.use(router);

app.listen(PORT, () => {
    console.log(` \x1b[1;33m⚡⚡ http://localhost:${PORT} ⚡⚡ \x1b[0m`);
});
