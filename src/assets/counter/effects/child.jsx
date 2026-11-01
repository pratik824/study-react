import   { useEffect, useState } from "react";
let storeIntervalId=''
export function Child(){
    const [spi,setspi]=useState('')
    const [sample,setsample]=useState(10)
    const [count,setcount]=useState(11)
    useEffect(()=>{
        ( async function () {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const answer= await data.json();
            setspi(JSON.stringify(answer).length);
        })()
        let id =setInterval(()=>{
            console.log('i am inteval');
            
        },1000)
        storeIntervalId=id
        
    },[])
    useEffect(()=>{
        return()=>{
            console.log('i will excusively called when it will unmounting ');
           clearInterval(storeIntervalId) 
        }
        
    },[])
    useEffect(()=>{
        console.log('display updated');
        
    },[sample])
    useEffect(()=>{
        setTimeout(() => {
            if(count>0){
                setcount((prev)=>{
                    return prev-1;
                })
            }
        }, 1000);

    },[count])

    return(
        <>
        {spi}
        <h1>whether components</h1>
        {count}
        <button onClick={()=>setsample(sample+1)}>samplebtn</button>
        </>
    )
}