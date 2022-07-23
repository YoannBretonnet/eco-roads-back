// IMPORTATIONS

import { Router } from 'express';
const router = Router();

import { fetchAllCars, fetchOneCar, createCar, updateCar, deleteCar } from '../controller/carController.js';

// ROUTES CAR

router.get('/cars', fetchAllCars);
router.get('/car/:id', fetchOneCar);
router.post('/car', createCar);
router.patch('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export { router };

