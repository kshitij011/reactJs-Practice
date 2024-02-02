//Used to perform side effects in the component
//eg: fetching data, directly updating DOM, timers.

import { useState, useEffect } from 'react'

export const UseEffectHook = () => {
    useEffect(()=>{
        console.log('Run only once');
    }, [])

    useEffect(()=>{
        if(count === 5) setText(true)
    })

    const [count, setCount] = useState(0)
    const [text, setText] = useState(false)

    const increment = () => {
        setCount(count+1)
    }
    console.log(count);

    return(
        <>
            <button onClick={increment}>increment</button>
            <p>Count is {count}</p>
            {text?<h1>Hello World</h1>: null}
        </>
    )
}