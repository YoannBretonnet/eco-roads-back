import { Router } from 'express'
const router = Router();

import { router as usersRouter} from './users.js';
import { router as authRouter } from './auth.js';
import { router as carRouter } from './car.js';

router.use('/api/users', usersRouter);
router.use('/api/auth', authRouter);
router.use('/', carRouter);


export { router };