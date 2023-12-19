import deleteImg from '../assets/delete-icon.svg'

const TableUsers = (props) => {
   const {user}= props;
   const data = user || [];
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    apellido
                </th>
                <th scope="col" className="px-6 py-3">
                   role
                </th>
                <th scope="col" className="px-6 py-3">
                   email
                </th>
                <th scope="col" className="px-6 py-3">
                   contraseña
                </th>
                <th scope="col" className="px-6 py-3">
                   editar
                </th>
                <th scope="col" className="p-4">
                    delete
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
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <img src={deleteImg} alt="delete" />
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{d.name}</div>
                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Designer
                </td>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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