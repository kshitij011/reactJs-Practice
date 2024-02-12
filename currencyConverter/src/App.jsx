import { useState } from 'react'
import { InputBox } from './components/inputBox.jsx'
import './App.css'
import { useCurrencyInfo } from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className = 'container'>
      {/* <h1 className='heading'>Hello World</h1> */}
      {/* <InputBox /> */}

      <div className="div1">
        <div className="innerdiv">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }} >
            <div className='formdiv'>
              <InputBox
              label = 'from'
              amount={amount}
              currencyOptions={options}
              onCurrnecyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='button'>
              <button
              onClick={swap}
              >Swap</button>
            </div>

            <div className='formdiv'>
              <InputBox
              label = 'to'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrnecyChange={(currency)=>setTo(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={to}
              />
            </div>
            <div className="submit button">
            <button
            type='submit'
            >Convert</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default App
