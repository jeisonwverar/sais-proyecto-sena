

const RowsInventory = ({data}) => {
  return (
    <>
      {

(data.length===0)?(
        <tr>
            <td className="bg-gray-200 py-2 text-center text-xl text-black" colSpan="9">Vacio</td>
        </tr>
):(

data.map((element) => (
<tr key={element.id} className="border-b hover:bg-orange-100 bg-gray-100">
<td className="p-3 px-5">{element.date}</td>
<td className="p-3 px-5">{element.productId}</td>
<td className="p-3 px-5">{element.product.name}</td>
<td className="p-3 px-5">{element.serialNumber}</td>
<td className="p-3 px-5">{element.amount}</td>
<td className="p-3 px-5">{element.observation}</td>
<td className="p-3 px-5">{element.product.subsystem}</td>
<td className="p-3 px-5">
<button
type="button"
className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
>
Save
</button>
<button
type="button"
className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
>
Delete
</button>
</td>
</tr>
)
  
))
}
    </>
  )
}

export default RowsInventory