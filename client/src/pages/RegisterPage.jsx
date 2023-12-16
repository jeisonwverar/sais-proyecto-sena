import{useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import {useNavigate,Link} from 'react-router-dom'
import { useEffect } from 'react';
const RegisterPage = () => {

  const {register, handleSubmit,formState:{errors}}=useForm();
  const {singup,isAuthenticated,errors:registerError}=useAuth();
  const navigate=useNavigate()

  useEffect(()=>{
    if(isAuthenticated) navigate('/login');

  },[isAuthenticated]);

  const onSubmit=handleSubmit((values)=>{
    console.log(values)
    singup(values);
  })



  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center '>
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        registerError.map((error,i)=>(
          <div key={i} className='bg-red-500 p-2 text-white text-center'>
            {error}
          </div>
        ))
      }
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
      <input type="text" 
       {...register('name',{required:true})} 
       className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2'
       placeholder='name'/>

        {
          errors.name && (
            <p className='text-red-500'>
              name is required
            </p>
          )
        }
        <input type="text" 
       {...register('lastname',{required:true})} 
       className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2'
       placeholder='lastname'/>

        {
          errors.lastname && (
            <p className='text-red-500'>
              lastname is required
            </p>
          )
        }
        <input type="email" 
       {...register('email',{required:true})} 
       className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2'
       placeholder='email'/>

        {
          errors.email && (
            <p className='text-red-500'>
              email is required
            </p>
          )
        }

<input type="password" 
       {...register('password',{required:true})} 
       className='w-full bg-zinc-700 text-white px-4 p-y2 rounded-md my-2'
       placeholder='password'/>

        {
          errors.password && (
            <p className='text-red-500'>
              password is required
            </p>
          )
        }


      <button type="submit"
        className='bg-yellow-600 text-white px-4 py-2 rounded-md my-2 hover:bg-yellow-500'>
          Register
       </button>

      </form>
      <p>Already have account? 
      <Link to='/login' className='flex gap-x-2 text-blue-400'>Sign up
    </Link></p>

      </div>
      
    </div>
  )
}

export default RegisterPage