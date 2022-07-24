import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send(
        'Hello la team de choc ! Cliquez <a href="https://eco-roads.herokuapp.com/api-docs/#/" target="_blank" > <strong>ici</strong> </a> pour accéder à la doc',
    );
});

// USER ROUTES
import { router as userRouter } from "./users.js";
router.use("/api/v1", userRouter);

// BRAND ROUTES
// import { router as brandRouter } from "./brand.js";
// router.use("/api/v1", brandRouter);

// CAR ROUTES
import { router as carRouter } from "./car.js";
router.use("/api/v1", carRouter);

// CHECK a decommenter au fur et a mesure de l'implementation des routes
// NETWORK ROUTES
// import { router as networkRouter } from "./network.js";
// router.use("/api/v1", networkRouter);

// CHARGING_STATION ROUTES
// import { router as stationRoute } from "./station.js";
// router.use("/api/v1", stationRoute);

// CATEGORY ROUTES
// import { router as categoryRouter } from "./category.js";
// router.use("/api/v1", categoryRouter);

// INTERESTING_POINTS ROUTES
// import { router as interestingRouter } from "./interesting.js";
// router.use("/api/v1", interestingRouter);

// LOCATION ROUTES
// import { router as locationRouter } from "./location.js";
// router.use("/api/v1", locationRouter);

// ROAD ROUTES
// import { router as roadRouter } from "./road.js";
// router.use("/api/v1", roadRouter);

export { router };
