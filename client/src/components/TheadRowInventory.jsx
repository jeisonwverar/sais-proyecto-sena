import {useAuth} from '../context/AuthContext'
const TheadRowInventory = () => {
const{user}=useAuth()


  return (
    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
    <tr>
        <th scope="col" className="px-6 py-3">
            fecha
        </th>
        <th scope="col" className="px-6 py-3">
            consecutivo
        </th>
        <th scope="col" className="px-6 py-3">
            nombre
        </th>
        <th scope="col" className="px-6 py-3">
            cantidad
        </th>
        <th scope="col" className="px-6 py-3">
            serial
        </th>
        <th scope="col" className="px-6 py-3">
            descripción
        </th>
        <th scope="col" className="px-6 py-3">
            sub
        </th>
        {
            (user.role==='storer'||user.role==='admin')&&(
                    <th scope="col" className="px-6 py-3">
                        accion
                    </th>

            )
        }
    </tr>
</thead>

  )
}

export default TheadRowInventory