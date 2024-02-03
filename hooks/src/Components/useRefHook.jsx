//lets you reference a value thats not needed for rendering
//useRef is mostly used for referencing elements inside html
import {useState, useEffect, useRef} from 'react'

export const UseRefHook=()=>{
    const [name, setName] = useState('')
    // const [renderCount, setRenderCount] = useState(0)
    const renderCount = useRef(1)   //returns a simple obj: {current: 0}. To access value: renderCount.current
    const inputRef = useRef()

    useEffect(()=>{
        // setRenderCount(prevRenderCount=>prevRenderCount+1)   //useEffect will increment the count when page is rendered which will again call the useEffect hook, this will cause infinite loop. Using state results in infinite loop, using refs does not cause our component to reupdate when it gets changed.
        renderCount.current = renderCount.current + 1   //changing the render count using useRef will never cause our component to rerender. Its completely seperate from render cycle.
    })

    function focus(){
        inputRef.current.focus()
    }

    return(
        <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times.</div>
        <button onClick={focus}>Focus</button>
        </>
    )
}