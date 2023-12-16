

const HomePage = () => {
  return (
    <div className=" flex text-center justify-center  bg-slate-400 ">
    <div className="flex  flex-col max-w-sm py-5 m-3">
    <h1 className=" text-3xl font-bold py-5 text-cyan-800">!Bienvenidos</h1>
    <p className="text-white 2xl">Nuestra aplicación web consiste en un inventario muy intuitivo para nuestros usuarios,
Creado para la necesidad de tener un manejo más adecuado.
    </p>

    </div>
    <div className="p-6">
        <img src="/img/initial-home.jpg" alt="home page"  />
    </div>
    </div>
  )
}

export default HomePage