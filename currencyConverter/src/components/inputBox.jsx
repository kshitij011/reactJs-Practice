import React from 'react'
import './inputBox.css'

export const InputBox= ({
    label,
    amount,
    onAmountChange,
    onCurrnecyChange,
    currencyOptions=[],
    selectedCurrency='usd',
    amountDisabled ='false',
    currencyDisabled = 'false',
    className = ''
})=>{
    return(
        <div className='input'>
            <div className='box1'>
                <label htmlFor='amount' className='label1'>Amount</label>
                <input
                id='amount'
                type='number'
                className='numInput'
                placeholder='Amount'
                // disabled={amountDisabled}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                >
                </input>
            </div>

            <div className='box2'>
                <label htmlFor='currency' className='label1'>Currency</label>
                {/* <p className='currencyType'>CurrencyType</p> */}
                <select
                    id='currency'
                    className='selectCurrency'
                    value={selectedCurrency}
                    onChange={(e) => {onCurrnecyChange && onCurrnecyChange(e.target.value)}}
                    // disabled={currencyDisabled}
                >
                    <option>Value 1</option>
                    <option>Value 2</option>
                    <option>Value 3</option>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency} >{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}