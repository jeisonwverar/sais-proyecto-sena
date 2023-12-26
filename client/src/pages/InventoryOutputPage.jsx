import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'
import  RowsInventory from "../components/RowsInventory";
import TheadRowInventory from '../components/TheadRowInventory';
import Button from '../components/Button';
const InventoryOutputPage = () => {
  const {output,getInventory}=useInventory();
 
  useEffect(()=>{
    getInventory('output')
  },[])

  const inventory=output.data||[];
  

  return (
  
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Button path='/inventory/add'></Button>
        <h1 className='text-center text-white text-xl font-bold my-5'>Inventario salida</h1>
    <table className="w-auto text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <TheadRowInventory/>
        <RowsInventory inventory={inventory}/>
        
    </table>
</div>
    )
}

export default InventoryOutputPage