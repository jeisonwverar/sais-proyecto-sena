import { Router } from "express";
import {getUsers,getIdUser,updateUsers,deleteUsers,getUserDeleted,restoreUser} from "../controllers/user.controller.js";
import {authRequired} from '../middlewares/validateToken.js';
import {checkRoleAuth} from '../middlewares/validateRoll.js'
const router =Router();

router.get('/users',authRequired,checkRoleAuth(['admin']),getUsers);
router.get('/users/:id',authRequired,getIdUser);
//router.post('/users',createUsers);
router.put('/users/:id',authRequired,updateUsers);
router.delete('/users/:id',authRequired,deleteUsers);
//delete logic
router.get('/deleted/users',authRequired,getUserDeleted);
router.patch('/deleted/users/:id',authRequired,restoreUser);
export default router;