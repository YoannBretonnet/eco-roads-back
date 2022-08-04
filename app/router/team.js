// IMPORTATIONS

import { Router } from 'express';
const router = Router();

import { fetchAllTeamate } from '../controller/teamController.js';

// ROUTE TEAM

router.get("/team", fetchAllTeamate);

export { router };
