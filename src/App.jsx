import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import ProductView from './components/ProductView'
import CreateContext from './Context/CreateContext'
import UserSignIn from './UserLogin/UserSignIn'
import UserSignUp from './UserLogin/UserSignUp'


function App() {


  return (
    <>
    <CreateContext>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/login' element={<UserSignIn />} />
          <Route path='/signup' element={<UserSignUp/>} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:productid' element={<ProductView />} />
        </Route>
      </Routes>
    </CreateContext>

    </>
  )
}

export default App;
