import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { Admin, Delar, User, } from './components/AuthRoutes'
import ProductView from './components/ProductView'
import CreateContext from './Context/CreateContext'
import UserSignIn from './UserLogin/UserSignIn'
import UserSignUp from './UserLogin/UserSignUp'
import UserProfile from './components/UserProfile'
import About from './components/About'
import Contact from './components/Contact'
import Kyc from './components/Kyc'
import Aadhar from './components/Aadhar'
import Cart from './components/Cart'
import Order from './components/Order'
import Dashboard from './components/Dashboard'
import DelarDashboard from './components/DelarDashboard'
import DelarLogin from './UserLogin/DelarLogin'
import DelarSignup from './UserLogin/DelarSignup'
import AdminLogin from './UserLogin/AdminLogin'
import AdminSignup from './UserLogin/AdminSignup'



function App() {

  return (
    <>
      <CreateContext>

        <Routes>

          <Route path='/login' element={<UserSignIn />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/delar/login' element={<DelarLogin />} />


          <Route path='/signup' element={<UserSignUp />} />
          <Route path='/admin/signup' element={<AdminSignup/>} />
          <Route path='/delar/signup' element={< DelarSignup/>} />

          <Route element={<User allowedRoles={1} />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:productid' element={<ProductView />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='*' element={<p>user 404 Page Not Found</p>} />
          </Route>

          <Route path='/admin' element={<Admin allowedRoles={2} />}>
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Order />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<p> Admin 404 Page Not Found</p>}/>
          </Route>

          <Route path='/delar' element={<Delar allowedRoles={3} />}>
            <Route index element={<DelarDashboard />} />
            <Route path='kyc' element={<Kyc />} />
            <Route path='aadhar' element={<Aadhar />} />
            <Route path='*' element={<p>Delar 404 Page Not Found</p>} />
          </Route>
        </Routes>
      </CreateContext>

    </>
  )
}

export default App;
