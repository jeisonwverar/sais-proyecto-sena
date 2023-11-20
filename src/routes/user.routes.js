import { Router } from "express";
import {getUsers,getIdUser,createUsers,updateUsers,deleteUsers} from "../controllers/user.controller.js";
const router =Router();

app.get('/users',getUsers);
app.get('/users:id',getIdUser);
app.post('/users',createUsers);
app.patch('/delete/:id',updateUsers);
//delete logic
app.put('/delete/:id',deleteUsers);


export default router;