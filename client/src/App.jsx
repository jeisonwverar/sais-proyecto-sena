
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InventoryHome from'./pages/InventoryHome'
import InventoryOutputPage from './pages/InventoryOutputPage'
import { AuthProvider } from './context/AuthContext'
//import Navbar from './components/Navbar'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/dashboard'
import InventoryEntryPage from './pages/InventoryEntryPage'
import InventoryRefoundPage from './pages/InventoryRefoundPage'
import Products from './pages/Products'
import UserPage from './pages/UserPage'
import { ProductsProvider } from './context/ProductsContext'
import { InventoryProvider } from './context/InventoryContext'
import Footer from './components/Footer'
import NavbarMega from './components/NavbarMega'
import PageError404 from './pages/PageError404'
import ProfilePage from './pages/ProfilePage'
import UserPageDelete from './pages/UserPageDelete'
import UserPageEdit from './pages/UserPageEdit'
import ProductsFormPage from './pages/ProductsFormPage'
import InventoryFormPage from './pages/InventoryFormPage'
function App() {
 

  return (
   /*  <div className='flex flex-col min-h-screen'> */
    <AuthProvider>
      <ProductsProvider>
        <InventoryProvider>
          <BrowserRouter>
          <header className='w-auto'>
            <NavbarMega/>
          </header>
    <main className='  flex justify-center items-center  min-h-screen' >
     
    <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/register' element={<RegisterPage />} />
  <Route path='/profile' element={<ProfilePage/>}/>
  <Route path='*' element={<PageError404/>}/>

  <Route element={<ProtectedRoute requiredRoles={['client', 'admin', 'storer']} />}>
    <Route path='/output' element={<InventoryOutputPage />} />
    <Route path='/entry' element={<InventoryEntryPage />} />
    <Route path='/refound' element={<InventoryRefoundPage />} />
    <Route path='/inventory' element={<InventoryHome />} />
   
  </Route>
  <Route element={<ProtectedRoute requiredRoles={['admin', 'storer']} />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/add' element={<ProductsFormPage/>}/>
      <Route path='/products/:id' element={<ProductsFormPage/>}/>
      <Route path='/users' element={<UserPage/>} />
      <Route path='/users/:id' element={<UserPageEdit/>}/>
      <Route path='/inventory/add'element={<InventoryFormPage/>}></Route>
      <Route path='/inventory/:id'element={<InventoryFormPage/>}></Route>
  </Route>
  <Route element={<ProtectedRoute requiredRoles={['admin']} />}>
    <Route path='/users/delete' element={<UserPageDelete/>}/>
      
  </Route>
</Routes>

    </main>
    <footer>
      <Footer/>

    </footer>
          </BrowserRouter>
        </InventoryProvider>
      </ProductsProvider>
    </AuthProvider>

/*     </div> */
  )
}

export default App
