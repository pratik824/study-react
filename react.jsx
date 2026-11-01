import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeProviderProps{
    children: ReactNode
}

export function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<String>('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}