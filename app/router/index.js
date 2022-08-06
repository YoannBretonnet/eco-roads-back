import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send(
        'Hello la team de choc ! Cliquez <a href="https://eco-roads.herokuapp.com/api-docs/#/" target="_blank" > <strong>ici</strong> </a> pour accéder à la doc',
    );
});



// USER ROUTE
import { router as userRouter } from "./users.js";
router.use("/api/v1", userRouter);

// CAR ROUTES
import { router as carRouter } from "./car.js";
router.use("/api/v1", carRouter);

//BRAND ROUTER
import { router as brandRouter } from "./brand.js";
router.use("/api/v1", brandRouter);

//CATEGORY ROUTES
import { router as categoryRouter } from "./category.js";
router.use("/api/v1", categoryRouter);

import { router as locationRouter } from "./location.js";
router.use("/api/v1", locationRouter);

import { router as teamRouter } from "./team.js";
router.use("/api/v1", teamRouter);

// ROAD ROUTES
// import { router as roadRouter } from "./road.js";
// router.use("/api/v1", roadRouter);

export { router };
