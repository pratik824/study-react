import { createContext, useState } from "react";
export const Mycontext=createContext();

export default function MyProvider({children}){
    
    const[count,setcount]=useState(12121 );
    return(
    
        <Mycontext.Provider value={{count,setcount}}>
            {children}
        </Mycontext.Provider>
    )
}