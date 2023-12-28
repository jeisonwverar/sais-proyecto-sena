import { createContext, useContext,useState } from 'react';
import {getProductRequest,getProductsRequest,createProductsRequest,deleteProductsRequest,updateProductsRequest,getDeleteProductsRequest,updateRestProductsRequest} from '../api/products.js';
const ProductsContext=createContext();

export const UseProducts=()=>{
    const context=useContext(ProductsContext)
    if(!context){
        throw new Error('UseProvider must be used within a UseProvider')
    }
    return context;
}


 export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    //get
    const getProducts=async()=>{
        try {
            
            const res=await getProductsRequest();
            
            setProducts(res);
        } catch (error) {
            console.error(error)
        }
    }

    const getProduct=async(id)=>{
        try {
            const res=await getProductRequest(id)
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct=async(newProduct)=>{
        try {
            const res= await createProductsRequest(newProduct)
            console.log(res);
        } catch (error) {
            console.error(error)
        }
    };

    const updateProduct=async(id,newProduct)=>{
        try {
            const data=await updateProductsRequest(id,newProduct)
            console.log(data,'exito')
        } catch (error) {
            console.log(error)
        }
    }


    const deleteProduct=async(id)=>{
        try {
            const res= await deleteProductsRequest(id);
            if(res.status==204)setProducts(products.filter(pro=>pro.id!==id))
        } catch (error) {
            console.error(error)
        }

    }


    
    




  return (
    <ProductsContext.Provider value={{
       getProducts,
       createProduct,
       updateProduct,
       getProduct,
       deleteProduct,
       products

    }}>
         {children}
        
    </ProductsContext.Provider>
  )
}

