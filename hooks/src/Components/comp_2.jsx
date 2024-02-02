import { useContext } from "react"
import { GlobalContext } from "../context"

export const ComponentTwo = ()=>{
    const {theme} = useContext(GlobalContext)
    return(
        <>
        <h1>Register</h1>
        <button style={theme==='dark'? {backgroundColor: 'black', color:'white'}:{backgroundColor: 'yellow', color:'black'}}>Register</button>
        </>
    )
}