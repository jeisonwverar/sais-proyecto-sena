import { Router } from "express";
import {getUsers,getIdUser,updateUsers,deleteUsers,getUserDeleted,restoreUser} from "../controllers/user.controller.js";
import {authRequired} from '../middlewares/validateToken.js';
const router =Router();

router.get('/users',authRequired,getUsers);
router.get('/users/:id',authRequired,getIdUser);
//router.post('/users',createUsers);
router.put('/users/:id',updateUsers);
//delete logic
router.delete('/users/:id',deleteUsers);
router.get('/detroy/users',getUserDeleted);
router.patch('/detroy/users/:id',restoreUser);
export default router;