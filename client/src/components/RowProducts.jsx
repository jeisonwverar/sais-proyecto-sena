

const RowProducts = (props) => {
  const { products } = props;
  const data = products.data || [];

  return (
    <>
      {data.length === 0 ? (
        <tr className="border-b hover:bg-orange-100 bg-gray-100">
          <td className="p-3 px-5">{/* Contenido del primer td */}</td>
          <td className="p-3 px-5">{/* Contenido del segundo td */}</td>
          <td className="p-3 px-5">{/* Contenido del tercer td */}</td>
          <td className="p-3 px-5">{/* Contenido del cuarto td */}</td>
          <td className="p-3 px-5">{/* Contenido del quinto td */}</td>
          <td className="p-3 px-5 flex justify-end">
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
      ) : (
       data.map((element) => (
          <tr key={element.id} className="border-b hover:bg-orange-100 bg-gray-100">
            <td className="p-3 px-5">{element.id}</td>
            <td className="p-3 px-5">{element.name}</td>
            <td className="p-3 px-5">{element.maker}</td>
            <td className="p-3 px-5">{element.description}</td>
            <td className="p-3 px-5">{element.subsystem}</td>
            <td className="p-3 px-5 flex justify-end">
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
        ))
      )}
    </>
  );
};

export default RowProducts;