import { useState, useEffect } from "react";

export const useCurrencyInfo = (currency) =>{
    const [data, setData] = useState({});

    useEffect(()=>{     //any change in the currency will fire this useEffect hook
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    console.log(data)
    return data
}