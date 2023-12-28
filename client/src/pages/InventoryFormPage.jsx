import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useInventory } from "../context/InventoryContext";
import moment from 'moment'
const InventoryFormPage = () => {
  const formatDate=(date)=>{
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return formattedDate
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {

    createInventory,
    updateInventory,
    inventoryError,
    getInventoryId
  } = useInventory();
  const params = useParams();
  const navigate = useNavigate();
  console.log(inventoryError)
  
  useEffect(() => {
    const loadInventory=async()=>{
      
       try {
        if(params.id){
          const item=await getInventoryId(params.id)
          console.log(item)
            const itemDate= formatDate(item.date)
            

          await setValue('consecutive',item.consecutive)
          await setValue('serialNumber',item.serialNumber)
          await setValue('observation',item.observation)
          await setValue('productId',item.productId)
          await setValue('amount',item.amount)
          await setValue('movementType',item.movementType)
          await setValue('date',itemDate)

        }
       } catch (error) {
        console.log(error)
       }
    }
    loadInventory()

  });

  const onSubmit = handleSubmit(async(data) => {
    const dataFormat = {
      ...data,
      amount: parseInt(data.amount),
      productId: parseInt(data.productId),
    };
    if(params.id){
     await updateInventory(dataFormat);
      console.log('ingresando al params')
    }
    await createInventory(dataFormat);

    navigate('/inventory')
  });
  return (
    <div className="w-screen p-14 m-10  rounded bg-white border-gray-200 dark:bg-gray-900">
      <h1 className="text-3xl text-center font-bold ">
        {params.id ? "Actualizar " : "Nuevo"}
      </h1>
      {inventoryError.map((error, i) => (
        <div className="bg-red-500 p-2 text-white text-center" key={i}>
          {error}
        </div>
      ))}
      <form
        className=" flex flex-col gap-2 max-w-sm mx-auto"
        onSubmit={onSubmit}
      >
        
        <div className="mb-5">
          <label
            htmlFor="consecutive"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            consecutivo
          </label>
          <input
            type="text"
            id="consecutive"
            {...register("consecutive", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="consecutive"
          />
          {errors.consecutive && (
            <div className="bg-red-500 text-white mb-4  text-center">required consecutive</div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="serialNumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            serial
          </label>
          <input
            type="text"
            id="serialNumber"
            {...register("serialNumber")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="serialNumber"
          />
         
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            observación
          </label>
          <textarea
            id="observation"
            {...register("observation", { required: true })}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="observation"
          ></textarea>

          {errors.description && <div className="bg-red-500 text-white mb-4  text-center">required description</div>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="productId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            producto ID
          </label>
          <input
            type="number"
            id="productId"
            placeholder="producto id"
            {...register("productId", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
         {errors.productId && (
            <div className="bg-red-500 text-white my-4 text-center">
              required value 
            </div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            valor inicial
          </label>
          <input
            type="number"
            id="amount"
            placeholder="cantidad"
            {...register("amount", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.amount && (
            <div className="bg-red-500 text-white my-4 text-center text-center ">
              required value 
            </div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="movementType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            tipo de movimiento
          </label>
          <select
            id="movementType"
            placeholder="movementType"
            {...register("movementType", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="salida">salida</option>
            <option value="entrada">entrada</option>
            <option value="reintegro">reintegro</option>
          </select>
          
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            fecha
          </label>
          <input
            type="date"
            id="date"
            placeholder="date"
            {...register("date", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.date && (
            <div className="bg-red-500 text-white my-4  text-center">
              required date
            </div>
          )}
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

export default InventoryFormPage;
