import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'

function App() {

  const product = [
    {
      price: 99999,
      name: "IPhone",
      quantity: 0
    },
    {
      price: 9999,
      name: "Redmi",
      quantity: 0
    }
  ]

  return (
    <>
     <Navbar />
     <ProductList productProp={product} />
     <Footer />
    </>
  )
}

export default App
