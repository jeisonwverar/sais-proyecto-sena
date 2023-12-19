import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import profileImg from "../assets/patron-1.jpg";

const profile = () => {
  const { user, loading } = useAuth();

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold  text-white ">Perfil.</h1>
      <div className="  w-60 text-lg text-gray-500  bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
        <img src={profileImg} alt="patron" className="block w-full  h-40 rounded-t-lg" />
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <img
              className="w-20 h-20 rounded-full border-slate-500 "
              src={`https://robohash.org/${loading ? "avatar" : user.role}`}
              alt={`${loading ? "avatar" : user.name}`}
            />

            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            {`${loading ? "Name" : user.role}`}
          </p>
          <p className="mb-6 text-sm">
            Correo: 
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >{`${loading ? "@" : user.email}`}</a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              Nombre: {`${loading ? "Name" : user.name}`}
            </li>
            <li>Apellido: {`${loading ? "lastName" : user.lastname}`}</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default profile;
