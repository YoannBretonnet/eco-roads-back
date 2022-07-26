// IMPORTATIONS

import { Router } from 'express';
const router = Router();

import { fetchAllCategories, fetchOneCategory } from '../controller/categoryController.js';

// ROUTES CATEGORIES
router.get('/categories', fetchAllCategories);

router.get('/category/:id', fetchOneCategory);


export { router };