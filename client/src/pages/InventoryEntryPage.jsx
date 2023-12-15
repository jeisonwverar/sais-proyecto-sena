

const InventoryEntryPage = () => {
  return (
    <div className="text-black">
      <div>
        <button className="m-6 p-3 bg-slate-500 text-white rounded-sm">Create</button>  
    </div>
    <div className="p-4 flex">
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">Name</th>
                    <th className="text-left p-3 px-5">Email</th>
                    <th className="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent"/></td>
                    <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent"/></td>
                    <td className="p-3 px-5">
                        <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                </tr>
                
                
            </tbody>
        </table>
    </div>

      </div>
      </div>
  )
}

export default InventoryEntryPage