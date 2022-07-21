import { Router } from 'express'
const router = Router();

import { router as userRouter} from './users.js';

import { router as carRouter } from './car.js';

router.use('/api/v1/user', userRouter);
router.use('/api/v1/car', carRouter);


export { router };