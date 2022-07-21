import { Router } from 'express'
const router = Router();

import { router as usersRouter} from './users.js';
import { router as authRouter } from './auth.js';




router.use('/api/users', usersRouter);
router.use('/api/auth', authRouter);

export { router };