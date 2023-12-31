import { useEffect, useState } from 'react'
import {getDeleteUsersRequest} from '../api/user.js'
import Tabs from '../components/Tabs.jsx';
import TableUsers from '../components/TableUsers.jsx';



const UserPageDelete = () => {
    const [user,setUser]= useState([]);

    
     const getListUser=async()=>{
        try {
          const res= await getDeleteUsersRequest()
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
           console.error(error) 
        }
     }
     
     useEffect(()=>{
         getListUser()
         
         
    },[])
 

   console.log(user)
  return (
    <div className='w-full m-28 flex flex-col gap-2'>
        <Tabs/>
        <TableUsers user={user}/>
        
    </div>
  )
}

export default UserPageDelete;