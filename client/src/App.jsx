
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InventoryHome from'./pages/InventoryHome'
import InventoryOutputPage from './pages/InventoryOutputPage'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/dashboard'
import InventoryEntryPage from './pages/InventoryEntryPage'
import InventoryRefoundPage from './pages/InventoryRefoundPage'
function App() {
 

  return (
    <AuthProvider>
      <BrowserRouter>
    <main className='container mx-auto px-10'>
    <Navbar/>
    <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/register' element={<RegisterPage />} />

  <Route element={<ProtectedRoute requiredRoles={['client', 'admin', 'storer']} />}>
    <Route path='/output' element={<InventoryOutputPage />} />
    <Route path='/entry' element={<InventoryEntryPage />} />
    <Route path='/refound' element={<InventoryRefoundPage />} />
    <Route path='/inventory' element={<InventoryHome />} />
   
  </Route>
  <Route element={<ProtectedRoute requiredRoles={['admin', 'storer']} />}>
      <Route path='/dashboard' element={<Dashboard />} />
  </Route>
</Routes>

    </main>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
