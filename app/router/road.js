// IMPORTATIONS

import { Router } from 'express';
import { fetchAllRoads } from '../controller/roadController.js';
const router = Router();


// import { fetchAllRoads, fetchOneRoad, createRoad, updateRoad, deleteRoad } from '../controller/roadController.js';
import { authenticateToken } from "../middleware/auth.js";

router.get('/roads', authenticateToken, fetchAllRoads)

// router.get('/road/:id', fetchOneRoad);
// router.patch('/road/:id', updateRoad);
// router.delete('/road/:id', deleteRoad);

export { router };