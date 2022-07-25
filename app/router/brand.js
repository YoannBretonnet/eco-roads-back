// IMPORTATIONS

import { Router } from 'express';
const router = Router();

import { fetchAllBrands, fetchOneBrand, createBrand, updateBrand, deleteBrand } from '../controller/brandController.js';

// ROUTES CAR

router.get('/brands', fetchAllBrands);
router.get('/brand/:id', fetchOneBrand);
router.post('/brand', createBrand);
router.patch('/brand/:id', updateBrand);
router.delete('/brand/:id', deleteBrand);

export { router };
