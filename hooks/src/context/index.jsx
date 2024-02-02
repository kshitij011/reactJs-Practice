import { createContext } from "react"
import { useState } from "react"

export const GlobalContext = createContext(null)

export const GlobalState=({children})=>{

    const [theme, setTheme]=useState('light')
    return <GlobalContext.Provider value={{theme, setTheme}}>{children}</GlobalContext.Provider>
}