import {  useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate=useNavigate()
  const {path}=props
  const handleClick=(()=>{
      navigate(path)
  })
  return (
    <div className="m-5">
<button 
onClick={handleClick}
type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Agregar </button>
    </div>

  )
}

export default Button