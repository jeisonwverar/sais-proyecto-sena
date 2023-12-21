import { useForm } from "react-hook-form";
import { getUserRequest,updateUsersRequest } from "../api/user.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormUserEdit = () => {
  const [error, seterror] = useState([]);
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();
  const navigate=useNavigate();
  const params = useParams();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getUserRequest(params.id);
        //console.log(user.data);
        await setValue("name", user.data.name);
        await setValue("lastname", user.data.lastname);
        await setValue("email", user.data.email);
        await setValue("role", user.data.role);
      } catch (error) {
        console.log(error);
        seterror(error.response.data);
      }
    };
    loadUser();
  });

  const onSubmit = handleSubmit((data) => {

    if(params.id){
      console.log(params.id,data);
      updateUsersRequest(params.id,data)

    }
    navigate('/users')
  });
  return (
    <div className="w-screen p-14 m-10  rounded bg-white border-gray-200 dark:bg-gray-900">
      <h1 className="text-3xl text-center font-bold ">Editar</h1>
      <form className=" flex flex-col gap-2 max-w-sm mx-auto" onSubmit={onSubmit}>
        {error.map((err, i) => (
          <div key={i} className="bg-red-500 text-white mb-4 ">{err}</div>
        ))}
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            nombre
          </label>
          <input
            type="name"
            id="name"
            {...register("name", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
           
          />
        {errors.name && <div className="bg-red-500 text-white mb-4 ">required name</div>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            apellido
          </label>
          <input
            type="text"
            id="text"
            {...register("lastname", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="apellido"
            
          />
          {errors.apellido && <div className="bg-red-500 text-white mb-4 ">required lastname</div>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
          />
        {errors.email && <div className="bg-red-500 text-white mb-4 ">required email</div>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Nueva constraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password", { required: true, min: 5 })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
          />
        {errors.password && <div className="bg-red-500 text-white my-4 ">required  new password min:5 characters </div>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            seleccione el rol
          </label>
          <select
            id="role"
            placeholder="role"
            {...register("role")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="admin">admin</option>
            <option value="storer">storer</option>
            <option value="client">client</option>
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
};

export default FormUserEdit;
