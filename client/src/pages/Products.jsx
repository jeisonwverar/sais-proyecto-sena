import { useEffect } from 'react';
import {UseProducts} from '../context/ProductsContext'
import RowProducts from '../components/RowProducts';

const Products = () => {
  
 const {products,getProducts}= UseProducts();

 
 useEffect(()=>{
  getProducts()
  
 },[])
 
 
  return (
    <div className="text-black">
      <div>
        <button className="m-6 p-3 bg-slate-500 text-white rounded-sm">Create</button>  
    </div>
    <div className="p-4 flex">
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                <th className="text-left p-3 px-5">id</th>
                    <th className="text-left p-3 px-5">Nombre</th>
                    <th className="text-left p-3 px-5">Descripción</th>
                    <th className="text-left p-3 px-5">Marca</th>
                    <th className="text-left p-3 px-5">subsistema</th>
                    <th className="text-left p-3 px-5">Action</th>
                </tr>
                <RowProducts products={products}/>
               
                
                
            </tbody>
        </table>
    </div>

      </div>
      </div>
  )
}

export default Products