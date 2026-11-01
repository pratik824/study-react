
//import {createContext } from "react";
import { Mycontext } from "./contextProvider";
import { useContext } from "react";
export default function Child(){
    const storeValue=useContext(Mycontext)
    console.log(storeValue);
    
return(

    <div> Child:{storeValue.count}</div>

    
)
}