import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RowsInventory = (props) => {
  const { inventory } = props;
  const data = inventory || [];
  const{user}=useAuth()
    
  return (
    <tbody>
    {
      (data.lenght === 0)?(

          <tr className="bg-blue-700 border-b border-blue-400 hover:bg-blue-500">
              <th scope="row" colSpan={9} className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                  vacio
              </th>

          </tr>
      ):(
        data.map((ele,i)=>(
          <tr className="bg-blue-500 border-b border-blue-200 hover:bg-blue-400" key={i}>
              <td scope="row" className="px-6 py-4 font-medium" >
                  {ele.date}
              </td>
              <td className="px-6 py-4 font-medium " >
                  {ele.id}
              </td>
              <td className="px-6 py-4 font-medium ">
                  {ele.product.name??=''}
              </td>
              <td className="px-6 py-4 font-medium ">
                  {ele.amount}
              </td>
              <td className="px-6 py-4 font-medium ">
                  {ele.serialNumber}
              </td>
              <td className="px-6 py-4 font-medium ">
                  {ele.observation}
              </td>
              <td className="px-6 py-4 font-medium ">
                  {ele.product.subsystem??=''}
              </td>
              {
              (user.role==='storer'||user.role==='admin')&&(
              <td className="flex flex-col gap-2 px-6 py-4 ">
                    <Link to={`/inventory/${ele.id}`} className="font-medium text-white hover:underline cursor-pointer">Edit</Link>
                    <a href="#" className="font-medium text-white hover:underline cursor-pointer">Delete</a>
                </td>
              )
                }
          </tr>
          )
      )
    )}
        
          
  </tbody>
  )
}

export default RowsInventory