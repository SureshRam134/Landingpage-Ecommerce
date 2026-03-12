import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import ProductView from './components/ProductView'
import Card from './components/Items'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productid' element={<ProductView />} />
        </Route>
          <Route path='/card' element={<Card />} />

      </Routes>

    </>
  )
}

export default App;
