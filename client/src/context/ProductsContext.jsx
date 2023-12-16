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
    
    




  return (
    <ProductsContext.Provider value={{
       getProducts,
       products

    }}>
         {children}
        
    </ProductsContext.Provider>
  )
}

