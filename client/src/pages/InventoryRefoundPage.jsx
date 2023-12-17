import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'
import  RowsInventory from "../components/RowsInventory";

const InventoryRefoundPage = () => {
  const {refound,getInventory}=useInventory();
 
  useEffect(()=>{
    getInventory('refound')
  },[])

  const data=refound.data||[];
  console.log(data)

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
                      <th className="text-left p-3 px-5">fecha</th>
                      <th className="text-left p-3 px-5">id</th>
                      <th className="text-left p-3 px-5">nombre</th>
                      <th className="text-left p-3 px-5">serial</th>
                      <th className="text-left p-3 px-5">cantidad</th>
                      <th className="text-left p-3 px-5">observacion</th>
                      <th className="text-left p-3 px-5">subsistema</th>
                      <th className="text-left p-3 px-5">action</th>
                  </tr>
                  <RowsInventory data={data}/>
              </tbody>
              </table>
      </div>
  
        </div>
        </div>
    )
}

export default InventoryRefoundPage