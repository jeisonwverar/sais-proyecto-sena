import { useEffect } from 'react';
import {UseProducts} from '../context/ProductsContext'
import RowProducts from '../components/RowProducts';
import Button from '../components/Button';
const Products = () => {
  
 const {products,getProducts}= UseProducts();

 
 useEffect(()=>{
  getProducts()
  
 },[])
 
 
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className='text-center text-white text-xl font-bold my-5'>Productos</h1>
        <Button path='/products/add' ></Button>
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
            <th scope="col" className="px-6 py-3">
                    nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    descripción
                </th>
                <th scope="col" className="px-6 py-3">
                    marca
                </th>
                <th scope="col" className="px-6 py-3">
                    subsistema
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        
        <RowProducts products={products}/>
           
        
    </table>
</div>
  )
}

export default Products