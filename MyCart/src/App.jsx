import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'

function App() {

  const product = [
    {
      price: 99999,
      name: "IPhone 10S pro",
      quantity: 0
    },
    {
      price: 9999,
      name: "Redmi Note 10",
      quantity: 0
    }
  ]

  const [products, setProducts] = useState(product)
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity=(index)=>{
    let newProductList = [...products];
    let newTotalAmount = totalAmount;

    // console.log(newProductList[index]);
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  return (
    <>
     <Navbar />
     <ProductList productProp={product} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
     <Footer />
    </>
  )
}

export default App
