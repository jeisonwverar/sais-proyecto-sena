import { Router } from "express";
import {getUsers,getIdUser,updateUsers,deleteUsers,getUserDeleted,restoreUser} from "../controllers/user.controller.js";
import {authRequired} from '../middlewares/validateToken.js';
import {checkRoleAuth} from '../middlewares/validateRoll.js';
const router =Router();

router.get('/users',authRequired,checkRoleAuth(['admin','storer']),getUsers);
router.get('/users/:id',authRequired,checkRoleAuth(['admin','storer']),getIdUser);
//router.post('/users',createUsers);
router.put('/users/:id',authRequired,checkRoleAuth(['admin']),updateUsers);
router.delete('/users/:id',authRequired,checkRoleAuth(['admin']),deleteUsers);
//delete logic
router.get('/deleted/users',authRequired,checkRoleAuth(['admin']),getUserDeleted);
router.patch('/deleted/users/:id',authRequired,checkRoleAuth(['admin']),restoreUser);
export default router;