//useMemo stands for memorization(caching a value) so you dont have to recompute it every single time.
//uses of useMemo function: 1) When using slow function use useMemo to stop it from recomputing, it only recomputes the slow function when the inputs change and we need new value form the function.
    //2) Referential equality: Whenever we want to make sure that the reference of the function is the same as the last time and internal working isnt changed, we use useMemo hook. We update the reference of the object only when the contents of the object change.

import {useState, useMemo, useEffect} from 'react'

export const UseMemoHook=()=>{
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(()=> slowFunction(number),[number])   //memorising slowFuncion so if num doesnt change, we dont have to recalculate slow function again
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    useEffect(()=>{
        console.log('theme changed');
    }, [dark])

    return(
        <>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=> setDark(prevDark=>!prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num){
    console.log('Calling slow function')
    for (let i=0; i<=1000000000; i++){}
    // console.log('Returning num*2');
    return num*2;
}