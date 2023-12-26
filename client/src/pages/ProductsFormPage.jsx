import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { UseProducts } from '../context/ProductsContext';
const ProductsFormPage = () => {
    const{register,handleSubmit,setValue}=useForm();
    const {getProduct,updateProduct,createProduct}=UseProducts();
    const navigate=useNavigate();
    const params=useParams();
    useEffect(()=>{
      const loadProduct=async()=>{
        const product=await getProduct(params.id)
        if(params.id){
          await setValue('name',product.name)
          await setValue('description',product.description)
          await setValue('maker',product.maker)
          await setValue('initialAmount',product.initialAmount)
          await setValue('subsystem',product.subsystem)
             
        }

        
      }
      loadProduct()
      
    })
    const onSubmit=handleSubmit((data)=>{
        const parseData={
         ...data,
         initialAmount:parseInt(data.initialAmount)
        }
        if(params.id){
            
            updateProduct(params.id,parseData)
        }else{
            console.log(parseData)
            createProduct(parseData);
        }

        navigate('/products')
    })
  
    return (
        <div className="w-screen p-14 m-10  rounded bg-white border-gray-200 dark:bg-gray-900">
          <h1 className="text-3xl text-center font-bold ">{(params.id)?'Actualizar producto':'Nuevo producto'}</h1>
          <form className=" flex flex-col gap-2 max-w-sm mx-auto" onSubmit={onSubmit}>
           {/*  {error.map((err, i) => (
              <div key={i} className="bg-red-500 text-white mb-4 ">{err}</div>
            ))} */}
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                nombre del producto
              </label>
              <input
                type="name"
                id="name"
                {...register("name", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name"
               
              />
           {/*  {errors.name && <div className="bg-red-500 text-white mb-4 ">required name</div>} */}
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                descripción
              </label>
              <input
                type="text"
                id="text"
                {...register("description", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="descripción"
                
              />
              {/* {errors.apellido && <div className="bg-red-500 text-white mb-4 ">required lastname</div>} */}
            </div>
            <div className="mb-5">
              <label
                htmlFor="maker"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                fabricante
              </label>
              <input
                type="text"
                id="maker"
                placeholder="fabricante"
                {...register("maker")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
              />
            {/* {errors.email && <div className="bg-red-500 text-white mb-4 ">required email</div>} */}
            </div>
            <div className="mb-5">
              <label
                htmlFor="initialAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                valor inicial
              </label>
              <input
                type="number"
                id="initialAmount"
                placeholder="valor inicial"
                {...register("initialAmount", { required: true, min: 5 })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              />
           {/*  {errors.password && <div className="bg-red-500 text-white my-4 ">required  new password min:5 characters </div>} */}
            </div>
            <div className="mb-5">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                seleccione el subsistema
              </label>
              <select
                id="role"
                placeholder="role"
                {...register("subsystem")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                <option value="ARS">ars</option>
                <option value="PMV">pmv</option>
                <option value="CCTV">cctv</option>
                <option value="EPP">epp</option>
                <option value="OTHER">other</option>
              </select>
            </div>
            <button
           
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      );

  
}

export default ProductsFormPage