import { Router } from "express";
import {getUsers,getIdUser,createUsers,updateUsers,deleteUsers} from "../controllers/user.controller.js";
const router =Router();

router.get('/users',getUsers);
router.get('/users/:id',getIdUser);
router.post('/users',createUsers);
router.put('/users/:id',updateUsers);
//delete logic
router.delete('/users/:id',deleteUsers);


export default router;