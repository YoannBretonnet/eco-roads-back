// ~ *** *** ROUTER CONFIG *** *** ~ //
// ~ ***************************** ~ //

import { Router } from "express";
const router = Router();
import {
    createUser,
    fetchOneUser,
    loginUser,
    updateUser,
    deleteUser,
    fetchAllUsers,
} from "../controller/userController.js";
import { authenticateToken } from "../middleware/authorization.js";

// ~ *** *** SCHEMA CONFIG *** *** ~ //
// ~ ***************************** ~ //

import { userSchema } from "../schema/user.js";
import { validation } from "../service/validation.js";

// admin v2
router.get("/user", fetchAllUsers);

// login / register route
router.post("/user/register", validation.body(userSchema), createUser);
router.post("/user/login", loginUser);

// profile route
router.get("/user/profile", authenticateToken, fetchOneUser);
router.patch("/user/profile/:id", updateUser);
router.delete("/user/profile/:id", deleteUser);




export { router };
