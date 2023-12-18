import { useEffect } from 'react';
import {UseProducts} from '../context/ProductsContext'
import RowProducts from '../components/RowProducts';

const Products = () => {
  
 const {products,getProducts}= UseProducts();

 
 useEffect(()=>{
  getProducts()
  
 },[])
 
 
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
</div>
  )
}

export default Products