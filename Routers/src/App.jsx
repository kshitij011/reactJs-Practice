//React Router is a fully featured client and server side routing library for react.
//It helps create and navigate between different URLs that makeup web application.

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
// import { About } from './components/About'
import './App.css'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from './components/NewProducts'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'

//lazy function is a fun that takes another function as argument
//a promise is returned by this dynamic import which is then converted into a module that contains default exported react component
const LazyAbout = React.lazy(()=> import('./components/About'))

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
      <Route path='/order-summary' element={<OrderSummary/>} />
      <Route path='*' element={<NoMatch />} />
      <Route path='products' element={<Products />}>
        <Route index element={<FeaturedProducts />} />    {/*index is the same as parent address and renders the specified element as default*/}
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>
      <Route path='users' element={<Users/>} >
        <Route path=':userId' element={<UserDetails/>} />   {/*Dynamic Routing*/}
        {/* <Route path='users/2' element={<UserDetails/>} /> */}
        {/* <Route path='users/3' element={<UserDetails/>} /> */}
        <Route path='admin' element={<Admin/>} />     {/*React router first matches the route that is more specific. If not found the :userId will be rendered */}
      </Route>

    </Routes>

    </>
  )
}

export default App
