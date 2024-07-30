import express from 'express';
import { getUser, createUser, getUsers, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;