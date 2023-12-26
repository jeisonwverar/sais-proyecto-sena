


import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'
import Button from '../components/Button';
const InventoryHome = () => {
  const {inventory:inventoryGet,getInventory}=useInventory();
 
  useEffect(()=>{
    getInventory('general')
  },[])

  const inventory=inventoryGet.data||[];
 console.log(inventory)

  return (

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<Button path='/inventory/add'></Button>
<h1 className='text-center text-white text-xl font-bold my-5'>Inventario General</h1>
    <table className="w-auto text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    marca
                </th>
                <th scope="col" className="px-6 py-3">
                    v. inicial
                </th>
                <th scope="col" className="px-6 py-3">
                    entrada
                </th>
                <th scope="col" className="px-6 py-3">
                    salida
                </th>
                <th scope="col" className="px-6 py-3">
                    v. total
                </th>
                <th scope="col" className="px-6 py-3">
                    sub
                </th>
            </tr>
        </thead>
        <tbody>

            {
                (inventory.length===0)?(
            <tr className="bg-blue-400 border-b border-blue-400 hover:bg-blue-600">
                <th scope="row" colSpan={9} className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Lista vacia
                </th>
        
            </tr>

                ):(

                    inventory.map((inv,i)=>(

            <tr className="bg-blue-500 border-b border-blue-400 hover:bg-blue-400" key={i}>
                
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.id}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.name}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.maker}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.initialAmount}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.entryAmount}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.outputAmount}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.endAmount}
                </td>
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    {inv.subsystem}
                </td>
                
            </tr>
                    ))

                )
            }
           
        </tbody>
       
        
    </table>
</div>

  )
}

export default InventoryHome
