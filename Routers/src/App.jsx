//React Router is a fully featured client and server side routing library for react.
//It helps create and navigate between different URLs that makeup web application.

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Home } from './components/Home'
import { About } from './components/About'
import './App.css'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from './components/NewProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order-summary' element={<OrderSummary/>} />
      <Route path='*' element={<NoMatch />} />
      <Route path='products' element={<Products />}>
        <Route index element={<FeaturedProducts />} />    {/*index is the same as parent address and renders the specified element as default*/}
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>

    </Routes>

    </>
  )
}

export default App