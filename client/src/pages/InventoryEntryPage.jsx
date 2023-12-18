import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'
import  RowsInventory from "../components/RowsInventory";
import TheadRowInventory from '../components/TheadRowInventory'
const InventoryEntryPage = () => {
    const {entry,getInventory}=useInventory();
 
    useEffect(()=>{
      getInventory('entry')
    },[])
  
    const inventory=entry.data||[];
    console.log(inventory)

    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className='text-center text-white text-xl font-bold my-5'>Inventario Entrada</h1>
      <table className="w-auto text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <TheadRowInventory/>
          <RowsInventory inventory={inventory}/>
          
      </table>
  </div>
      )
}

export default InventoryEntryPage