import { useState } from 'react'
/*
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'*/
import './App.css'
//import { use } from 'react'
//const [satate,setstatus]= useState('Pratik');

function App() {
  //const [state,setstt]=useState('naman');
  //console.log(satate);
  //console.log(setstatus);
  //console.log(state);
  //console.log(setstt);
  
  const[arr,setarr]= useState([1,2,3,4,5,6])
  const [satate,setstatus]= useState('Pratik');
  

  
  function changeName(){
    setstatus(Math.random)*6
  }
  
  

  return (
    <>
    hello i am from app,jsx 
    HELLO
     <h3>name:{satate}{setstatus}</h3>
    <button onClick={changeName}>change mi</button>
    {setarr(...arr,7)}
   
    </>
  )
}

export default App
