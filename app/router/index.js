import { Router } from "express";
const router = Router();

import { router as userRouter } from "./users.js";

import { router as carRouter } from "./car.js";

router.get("/", (req, res) => {
    res.send("Welcome");
});


router.use("/api/v1", userRouter);
router.use("/api/v1", carRouter);

export { router };
