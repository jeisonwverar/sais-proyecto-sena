

const RowProducts = (props) => {
  const { products } = props;
  const data = products.data || [];

  return (
    <tbody>
      {
        (data.lenght === 0)?(

            <tr className="bg-blue-700 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        ):(
          data.map((ele,i)=>(
            <tr className="bg-blue-500 border-b border-blue-200 hover:bg-blue-400" key={i}>
                <td className="px-6 py-4">
                    {ele.id}
                </td>
                <td  className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">
                    {ele.name}
                </td>
                <td className="px-6 py-4">
                    {ele.maker}
                </td>
                <td className="px-6 py-4">
                    {ele.initialAmount}
                </td>
                <td className="px-6 py-4">
                    {ele.entryAmount}
                </td>
                <td className="px-6 py-4">
                    {ele.outputAmount}
                </td>
                <td className="px-6 py-4">
                    {}
                </td>
            </tr>
            )
        )
      )}
          
            
    </tbody>
  )
};

export default RowProducts;