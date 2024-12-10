import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component.jsx/Card'

 function App() {
  return (
    <>
    <h1 className='bg-blue-400 text-black text-center mb-4'>
      Hello world!
    </h1>
    <Card username= "sahil"/>
    <Card username="jafry"/>
</>
  )
}


export default App
 