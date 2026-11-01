//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import{ Giveme } from "./paragraph ";
//import App from './App.jsx'
//import abc, { Twosum ,Multiple } from './paragraph';
//import xyz from './paragraph';
//import App  from './assets/counter/App';
//import {NamedArr } from './assets/paragragh2';
//import App from './assets/counter/effects/App'
import App from './assets/counter/effects/wrapper/app'
/*

function savea(number){
    console.log('next'+number);
    
    
}*/
//abc();
/*const para ={
  gname:'namam',
  gage:20,
  yof:10,
}
const arr=['namnam','pratik','satish','ramarn','akashish']
 function random (narr){
       let maxvalue= narr.length-1
       let pickname=Math.floor(Math.random()*maxvalue+1)
       return narr[pickname];
    }
    let ran=random(arr);
    
   */      
  
    
   // const arr=['naman','pratik','sangham','tambre']   
 /*const obj={
  emp:'Parsjik',
  empId:21
 }*/
 /* function RandomName(arr){
      let maxvalue= arr.length-1;
      const returnValue=Math.floor(Math.random()*(maxvalue+1))
      return arr[returnValue]
     }
     const run=RandomName(arr)

 */
//const isBadse='treading'
  
createRoot(document.getElementById('root')).render(
    /*<>
      < Twosum />
      < Multiple  number={10} age={11} ran={ran} para={para} arr={arr} isBadse='trending' />
      </>-*/
    // <App/>
    // <NamedArr arr={arr} isBadse={isBadse}/>    
  
<App/>
)

