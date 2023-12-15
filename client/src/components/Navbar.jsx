import {Link} from 'react-router-dom'

import { useAuth } from '../context/AuthContext'


const Navbar = () => {
   
    const{isAuthenticated,logout,user}=useAuth();
    

          
            return (
              <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
                <Link to={isAuthenticated ? '/inventory' : '/'}>
                  <h1 className="text-2xl fon-bold ">S.A.I.S</h1>
                </Link>
                <ul className="flex gap-x-2">
                  {isAuthenticated && (
                    <>
                      <li className="">welcome {user.name}</li>
                      {(user.role === 'admin' || user.role === 'storer') && (
                        <li>
                          <Link to='/dashboard'>dashboard</Link>
                        </li>
                      )}
                      <li className="bg-indigo-500 px-4 py-1 rounded-sm">
                        <Link to='/inventory'>inventory</Link>
                        <li>
                          <Link to='/entry'>entradas</Link>
                        </li>
                        <li>
                          <Link to='/output'>salidas</Link>
                        </li>
                        <li>
                          <Link to='/refound'>reintegros</Link>
                        </li>
                        {
                            (user.role === 'admin' || user.role === 'storer') && (
                                <li>
                                  <Link to='/products'>producto</Link>
                                </li>
                              )
                        }
                      </li>
                      <li className="">
                        <Link to='/' onClick={() => logout()}>
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                  {!isAuthenticated && (
                    <>
                      <li className="bg-indigo-500 px-4 py-1 rounded-sm">
                        <Link to='/login'>Login</Link>
                      </li>
                      <li className="bg-indigo-500 px-4 py-1 rounded-sm">
                        <Link to='/register'>Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            );
                  }
            
          export default Navbar;

