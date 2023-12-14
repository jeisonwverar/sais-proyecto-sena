
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InventoryHome from'./pages/InventoryHome'
import { AuthProvider } from './context/AuthContext'
function App() {
 

  return (
    <AuthProvider>
      <BrowserRouter>
   <Routes>
    <Route path='/'element={<HomePage/>}/>
   <Route path='/login' element={
          <LoginPage/>
        }  />
        <Route path='/register' element={<RegisterPage/>}  />
        <Route path='/inventory' element={<InventoryHome/>}/>
   </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
