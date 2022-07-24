// IMPORTATIONS

import { Router } from 'express';
const router = Router();

import { fetchAllCars, fetchOneCar, createCar, updateCar, deleteCar } from '../controller/carController.js';

// ROUTES CAR

router.get('/cars', fetchAllCars);
router.post('/cars', createCar);

router.get('/car/:id', fetchOneCar);
router.patch('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export { router };

