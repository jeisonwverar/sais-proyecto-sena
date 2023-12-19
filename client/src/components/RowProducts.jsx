import { useAuth } from "../context/AuthContext";

const RowProducts = (props) => {
  const { products } = props;
  const{user}=useAuth()
  const data = products.data || [];

  return (
    <tbody>
      {
        (data.lenght === 0)?(

            <tr className="bg-blue-700 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" colSpan={6} className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Apple MacBook Pro 17
                </th> 
            </tr>
        ):(
          data.map((ele,i)=>(
            <tr className="bg-blue-500 border-b border-blue-200 hover:bg-blue-400" key={i}>
                <td className="px-6 py-4">
                    {ele.id}
                </td>
                <td  className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">
                    {ele.name}
                </td>
                <td className="px-6 py-4">
                    {ele.maker}
                </td>
                <td className="px-6 py-4">
                    {ele.description}
                </td>
               
                {
              (user.role==='storer'||user.role==='admin')&&(
              <td className="flex flex-col gap-2 px-6 py-4 ">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                    <a href="#" className="font-medium text-white hover:underline">Delete</a>
                </td>
              )
                }
                
            </tr>
            )
        )
      )}
          
            
    </tbody>
  )
};

export default RowProducts;