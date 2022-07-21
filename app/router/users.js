// ~ *** *** ROUTER CONFIG *** *** ~ //
// ~ ***************************** ~ //

import { Router } from 'express';
const router = Router();
import{ createUser, fetchOneUser, loginUser, updateUser, deleteUser } from '../controller/userController.js'
import { authenticateToken } from '../middleware/authorization.js';

// ~ *** *** SCHEMA CONFIG *** *** ~ //
// ~ ***************************** ~ //

import { userSchema } from '../schema/user.js';
import { validation } from '../service/validation.js';


router.post('/register', validation.body(userSchema), createUser);

router.post('/login', loginUser);

router.get('/profile/:id', authenticateToken, fetchOneUser);

router.patch('/profile/:id', updateUser);
router.delete('/profile/:id', deleteUser);


export { router };