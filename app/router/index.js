import { Router } from "express";
const router = Router();

// USER ROUTE
import { router as userRouter } from "./users.js";
router.use("/api/v1", userRouter);

// CAR ROUTE
import { router as carRouter } from "./car.js";
router.use("/api/v1", carRouter);

export { router };

