import { useState, createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const login = user => setUser(user)

    const logout =()=> setUser(null)

    return(
        <AuthContext.Provider value={{user, login, logout}}>    {/*Here value is an object hence double braces*/}
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}