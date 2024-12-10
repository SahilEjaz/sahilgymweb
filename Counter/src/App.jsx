import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  // let counter =15;
  const[counter,setCounter]=useState(14)

const addValue=()=>{
  setCounter(counter+1)

}
const RemoveValue=()=>{
  setCounter(counter-1)
}


  return(
 <>
 <h1>SAHIL</h1>
 <h2>COUNTER {counter}</h2>
 <button onClick={addValue}>
  ADD  {counter}
  </button>
 <br />
 <button onClick={RemoveValue}>
  SUB  {counter}
  </button>





</>
  )
}

export default App

