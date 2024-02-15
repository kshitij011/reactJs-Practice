import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () =>{
        auth.login(user)
        navigate('/profile', {replace:true})   //prevents coming back to login page once logged in if back button is pressed.
    }

    return(
        <div>
            <label htmlFor="input">
                Usrname:
            </label>
            <input id="input" type="text" onChange={e=>setUser(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}