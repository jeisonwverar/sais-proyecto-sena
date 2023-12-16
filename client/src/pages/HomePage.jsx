

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="flex  flex-col max-w-xl py-5 m-3">
          <h1 className=" text-3xl font-bold py-5 text-cyan-800">!Bienvenidos</h1>
          <p className="text-white 2xl">Nuestra aplicación web consiste en un inventario muy intuitivo para nuestros usuarios,
                                          Creado para la necesidad de tener un manejo más adecuado.
          </p>

      </div>
      <div className=" flex items-center justify-center w-full h-96 max-w-xl rounded-lg overflow-hidden">
          <img src="/img/initial-home.jpg" alt="home page" className="  w-full h-auto max-w-xl max-h-96 mb-4"  />
      </div>
    </div>
  )
}

export default HomePage