import { useState } from "react"

export default function Counter(){
    const [name, setname]=useState('namnam')
   // const[arr,setarr]=useState([1,2,3,4,5])
    
    
    const [counter,setstatus]=useState(0)   
    function handle(e){
        console.log(e);
        e.preventDefault();
        
    }
    return(
        <>
        
        <h1>counter value:{counter}</h1>
        <button onClick={()=>setstatus(counter+1)}>increment</button>
        <button onClick={()=>setstatus(counter-1)}> decrement</button>
        <input value={name} onChange={(e)=>handle(e.target.value) } name="name"/>
        <input value={setname} onChange={(e)=>handle(e.target.value)} />
        
        
        
        {/*arr.map((val)=>{
            return(
                <div key={val}>{JSON.stringify(val)} </div>
            )
        })*/}
        </>
    )
}