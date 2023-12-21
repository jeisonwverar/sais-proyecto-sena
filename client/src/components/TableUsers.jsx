import deleteImg from '../assets/delete-icon.svg'
import restoreImg from '../assets/restore.svg'
import { Link,useNavigate } from 'react-router-dom';
import {deleteUsersRequest,updateRestoreRequest} from '../api/user'
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
const TableUsers = (props) => {
  const navigate=useNavigate();  
   const {user}= props;
   const [data, setData] = useState([])
   const location = useLocation();
   //const [deleteUsers,setDeleteUsers]= useState([])
 useEffect(()=>{
    setData(user)
 },[user])
   
  const deleteUser=(async(id)=>{
    try {
      const res = await deleteUsersRequest(id);
       if(res.status===204){
        setData(data.filter(d=>d.id!==id))
       
       }
   
        
    } catch (error) {
        console.log(error)
    }
  })
  const restoreUser=(async(id)=>{
        try {
           const res=await  updateRestoreRequest(id)
           return res
        } catch (error) {
            console.log(error)
        }
  })

       const handleClick=(d)=>{
        try {
            if(!d.deleteAt){ 
             deleteUser(d.id)
             navigate('/users/delete')

            
         }
        
             restoreUser(d.id)
             navigate('/users')

            
        } catch (error) {
           console.log(error) 
        }
       }

   console.log('data desde componentente',data.deleteAt)
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    nombre
                </th>
    
                <th scope="col" className="px-6 py-3">
                   role
                </th>
                <th scope="col" className="px-6 py-3">
                   editar
                </th>
                <th scope="col" className="p-4">
                   { location.pathname.includes('/users/delete')?'restaurar':'eliminar'}
                                </th>
            </tr>
        </thead>
        <tbody>
            {
                (data.length===0)?(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th colSpan={7} className="w-4 p-4 text-center" >Vacio</th>
                    </tr>
            ):(
                data.map((d,i)=>(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${d.name}`} alt={d.name}/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{d.name} {d.lastname}</div>
                        <div className="font-normal text-gray-500">{d.email}</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    {d.role}
                </td>
            
                <td className="px-6 py-4">
                    <Link to={`/users/${d.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit user</Link>
                </td>
                <td className={`w-4 p-4 ${location.pathname.includes('/users/delete')? 'hover:bg-green-400':'hover:bg-red-400'} cursor-pointer ease-out`}
                onClick={()=>handleClick(d)}
                >
                    <div
                    
                    className="flex items-center justify-center">
                        <img src={
                              location.pathname.includes('/users/delete')?restoreImg:deleteImg} alt="delete"  className='w-6 h-6   '/>
                    </div>
                </td>
                
            </tr>
            )
               )) }   
        </tbody>
    </table>
</div>
  )
}

export default TableUsers