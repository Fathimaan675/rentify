import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import Front from './Pages/Front'
import Authent from './Pages/Authent'
import Sellerpage from './Pages/Sellerpage'
import Buyer from './Pages/Buyer'
import Sellerdetails from './Pages/Sellerdetails'
import Buyerlogin from './Pages/Buyerlogin'
import Alogin from './Pages/Alogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/'element={<Front/>}></Route>
        <Route path='/login'element={<Alogin/>}></Route>
        <Route path='/Register'element={<Authent/>}></Route>
        <Route path='/register/seller' element={<Authent insideRegister role="seller" />} />
      <Route path='/register/buyer' element={<Buyerlogin insideRegister role="buyer" />} />
      <Route path='/Seller'element={<Sellerpage/>}></Route>
      <Route path='/buyer'element={<Buyer/>}></Route>
      <Route path='/sellerdetails'element={<Sellerdetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
