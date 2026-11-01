import  { useEffect, useState } from "react";
import { Child } from "./child";
export default function App(){
        const[ispare  ,setpare]=useState(false)
    
    return(
        <>
        
        <h1>parent </h1>
        {ispare && <Child/>  }
        <button onClick={()=>setpare(!ispare)}> togale for child </button>
        </>
        
    )

}