import { useState } from "react"


function App() {
  const [color,setColor] = useState("yellow")

  return(
    <div className="w-full h-screen duration-200" style={ { backgroundColor:color} }
      > <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5 ">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-lg"> 
          <button onClick={()=>setColor("red")}
          className="px-3 py-2 rounded-full outline-none text-white shadow-sm"  style={{backgroundColor:"red"}}> red
          </button> 
          <button onClick={()=>setColor("green")}
          className="px-3 py-2 rounded-full outline-none text-white shadow-sm"  style={{backgroundColor:"green"}}> green
          </button> 
          <button onClick={()=>setColor("blue")}
           className="px-3 py-2 rounded-full outline-none text-white shadow-sm"  style={{backgroundColor:"blue"}}> blue
          </button> 
          </div>
        </div>
    </div>
  )
}

export default App
