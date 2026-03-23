import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { Admin, Delar, Layout,  } from './components/Layout'
import ProductView from './components/ProductView'
import CreateContext, { Context } from './Context/CreateContext'
import UserSignIn from './UserLogin/UserSignIn'
import UserSignUp from './UserLogin/UserSignUp'
import UserProfile from './components/UserProfile'
import About from './components/About'
import Contact from './components/Contact'
import Kyc from './components/Kyc'
import Aadhar from './components/Aadhar'



function App() {

  const user = JSON.parse(localStorage.getItem("user")) || ""

  console.log(user.role);
  
  return (
    <>
      <CreateContext>
        <Routes>
          <Route element={<Layout user={user}/>}>
            <Route index element={<Home />} />
            <Route path='/login' element={<UserSignIn />} />
            <Route path='/signup' element={<UserSignUp />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:productid' element={<ProductView />} />
          </Route>
          <Route path='/admin' element={<Admin user={user} />}>
            <Route index element={<UserProfile />} />
            <Route path='orders' element={<Kyc />} />
            <Route path='cart' element={<Aadhar />} />
          </Route>
           <Route path='/delar' element={<Delar user={user} />}>
            <Route index element={<UserProfile />} />
            <Route path='kyc' element={<Kyc />} />
            <Route path='aadhar' element={<Aadhar />} />
          </Route>

        </Routes>
      </CreateContext>

    </>
  )
}

export default App;
