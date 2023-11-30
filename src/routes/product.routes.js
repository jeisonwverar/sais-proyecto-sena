import { Router } from "express";
import {getProducts,createProduct,updateProduct,deleteProduct, getIdProduct,getDeletedProducts,restoreProduct}from "../controllers/product.controller.js";
import {authRequired} from '../middlewares/validateToken.js';
import {checkRoleAuth} from '../middlewares/validateRoll.js';
const router =Router();

router.get('/products',authRequired,getProducts);
router.get('/products/:id' ,authRequired,getIdProduct)
router.post('/products' ,authRequired,checkRoleAuth(['admin','storer']),createProduct);
router.put('/products/:id' ,authRequired,checkRoleAuth(['admin','storer']),updateProduct);
router.delete('/products/:id' ,authRequired,checkRoleAuth(['admin','storer']),deleteProduct);
//delete logic
router.get('/deleted/products' ,authRequired,checkRoleAuth(['admin','storer']),getDeletedProducts);
router.patch('/deleted/:id' ,authRequired,checkRoleAuth(['admin','storer']),restoreProduct);

export default router;