import { Router } from 'express'
const router = Router();

import { router as usersRouter} from './users.js';

router.use('/api/users', usersRouter);

export { router };