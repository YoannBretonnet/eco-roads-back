import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome");
});

// USER ROUTE
import { router as userRouter } from "./users.js";
router.use("/api/v1", userRouter);

// CAR ROUTE
import { router as carRouter } from "./car.js";
router.use("/api/v1", carRouter);

//BRAND ROUTER
import { router as brandRouter } from "./brand.js";
router.use("/api/v1", brandRouter);

export { router };

