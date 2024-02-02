import { useContext } from "react"
import { GlobalContext } from "../context"

export const ComponentOne=()=>{
    const {theme} = useContext(GlobalContext)
    return(
        <div>
            <h1>Login</h1>
            <button style={theme==='dark'?{backgroundColor:'black', color:'white'}:{backgroundColor:'yellow', color:'black'}}>Login</button>
        </div>
    )
}