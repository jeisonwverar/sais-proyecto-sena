import axios from './axios.js'

export const getProductsRequest=()=>axios.get('/products')
export const getProductRequest=(id)=>axios.get(`/products/${id}`)
export const createProductsRequest =(product)=>axios.post('/products',product);
export const updateProductsRequest =(id,product)=>axios.put(`/products/${id}`,product);
export const deleteProductsRequest =(id)=>axios.delete(`/products/${id}`);

//
export const getDeleteProductsRequest=()=>axios.get('/deleted/products')
export const updateRestProductsRequest=(id)=> axios.patch(`/deleted/${id}`)