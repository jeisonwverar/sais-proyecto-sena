import { useEffect, useState } from 'react'
import {getUsersRequest} from '../api/user.js'
import Tabs from '../components/Tabs.jsx';
import TableUsers from '../components/TableUsers.jsx';

const UserPage = () => {
   const [user,setUser]= useState([]);

    
     const getListUser=async()=>{
        try {
          const res= await getUsersRequest()
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

export default UserPage