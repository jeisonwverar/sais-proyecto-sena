import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'
import  RowsInventory from "../components/RowsInventory";
import TheadRowInventory from '../components/TheadRowInventory'

const InventoryRefoundPage = () => {
  const {refound,getInventory}=useInventory();
 
  useEffect(()=>{
    getInventory('refound')
  },[])

  const inventory=refound.data||[];
  

  return (
  
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className='text-center text-white text-xl font-bold my-5'>Inventario Reintegro</h1>
    <table className="w-auto text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <TheadRowInventory/>
        <RowsInventory inventory={inventory}/>
        
    </table>
</div>
    )
}

export default InventoryRefoundPage