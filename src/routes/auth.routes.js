import { Router } from "express";
const router=Router();
import {register,login,logout} from '../controllers/auth.controllers.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import{loginSchema,registerSchema} from '../schemas/auth.schemas.js'
router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);

export default router;