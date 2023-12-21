import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
const LoginPage = () => {
 const{register,handleSubmit,formState:{errors}}=useForm();
  const{signin,errors:signinErrors,isAuthenticated}=useAuth();
  console.log(signinErrors)
  const navigate=useNavigate();
  useEffect(()=>{
    if(isAuthenticated) navigate('/inventory');

  },[isAuthenticated])

 const onSubmit=handleSubmit((data)=>{
  signin(data)
 })
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center '>

        <div className='bg-zinc-600 max-w-md w-full p-10 rounded-md'>
        {
        signinErrors.map((error,i)=>(
          <div className='bg-red-500 p-2 text-white text-center' key={i}> 
            {error}
          </div>
        ))
      }
          <h1 className='text-3xl font-bold my-2 text-white'>Login</h1>
          <form onSubmit={onSubmit}>
            <input type="email" {...register('email',{required:true})} className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2'
              placeholder='email'/>
              {
                errors.email && (
                  <p className='text-red-500'>
                    email  is required
                  </p>
                )
              }
            <input type="password" {...register('password',{required:true,minLength:5})} className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2' 
              placeholder='password' />
               {
                errors.password && (
                  <p className='text-red-500'>
                    password  is required
                  </p>
                )
              }
              <button type="login" className='bg-yellow-600 text-white px-4 py-2 rounded-md my-2 hover:bg-yellow-500 cursor-pointer '>
                   entry
              </button>
          </form>
          <p  className='text-white'>Don´t have an account
            <Link to='/register' className='flex gap-x-2 text-blue-400'>Sign up </Link>
          </p>
        </div>
    </div>
  )
}

export default LoginPage