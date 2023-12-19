
import { Link } from 'react-router-dom'

const Tabs = () => {
  return (
    <div className=''>
<ul className=" text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li className="w-full">
        <Link to='/users' className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 rounded-s-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
        > usuarios</Link>
    </li>
    <li className="w-full">
        <Link to='/users/delete' className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >eliminados</Link>
    </li>
</ul>
</div>
  )
}

export default Tabs