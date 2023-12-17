
import {useInventory} from '../context/InventoryContext'
import { useEffect } from 'react'

const InventoryHome = () => {
  const {inventory,getInventory}=useInventory();
 
  useEffect(()=>{
    getInventory('general')
  },[])

  const data=inventory.data||[];
  //console.log(data)

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
                    <th className="text-left p-3 px-5">Marca</th>
                    <th className="text-left p-3 px-5">Valor Inicial</th>
                    <th className="text-left p-3 px-5">Entrada</th>
                    <th className="text-left p-3 px-5">Salida</th>
                    <th className="text-left p-3 px-5">total</th>
                    <th className="text-left p-3 px-5">subsistema</th>
                </tr>
                {
                  (data.length===0)?(
                    <tr>
                    <td className="bg-gray-200 py-2 text-center text-xl text-black" colSpan="9">Vacio</td>
                </tr>
                  ):(
                       
                    data.map((element) => (
              <tr key={element.id} className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{element.id}</td>
                <td className="p-3 px-5">{element.name}</td>
                <td className="p-3 px-5">{element.maker}</td>
                <td className="p-3 px-5">{element.initialAmount}</td>
                <td className="p-3 px-5">{element.entryAmount}</td>
                <td className="p-3 px-5">{element.outputAmount}</td>
                <td className="p-3 px-5">{element.endAmount}</td>
                <td className="p-3 px-5">{element.subsystem}</td>
              </tr>
            ))
                  )
                }
               
                
                
            </tbody>
            </table>
    </div>

      </div>
      </div>
  )
}

export default InventoryHome
