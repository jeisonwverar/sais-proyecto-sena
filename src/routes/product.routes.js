import { Router } from "express";
import {getProducts,createProduct,updateProduct,deleteProduct, getIdProduct,getDeletedProducts,restoreProduct}from "../controllers/product.controller.js"
const router =Router();

router.get('/products',getProducts);
router.get('/products/:id',getIdProduct)
router.post('/products',createProduct);
router.put('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);
router.get('/deleted/products',getDeletedProducts);
router.patch('/deleted/:id',restoreProduct);

export default router;