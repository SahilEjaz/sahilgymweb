
import { useState , useCallback, useEffect , useRef} from "react"


function App() {
  const [length, setLength]=useState(8)
  const[numberallow, setNumberallow]=useState(false)
  const[charallow,setCharallow]=useState(false)
  const[password,setPassword]=useState("")

  const passwordGen =useCallback(( )=>{
    let pass=""
    let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (numberallow)
      { str+="1234567890"}
      
    
    if (charallow) str+="!@#$%^&*()~"


    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberallow,charallow,setPassword])

  useEffect(()=>{
    passwordGen()
  },[length,numberallow,charallow,passwordGen])


  const passwordref = useRef(null) 


  const passwordcopy = useCallback(()=>{
    passwordref.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
   <div className="w-full max-w-md mx-auto px-4 my-8 shadow-md  bg-gray-800 text-orange-400 rounded-lg ">
    <h1 className="text-center text-white">Password Genrator</h1>
    <div className="flex shadow-md rounded-lg mb-4 overflow-hidden">
      <input 
      type="text" 
      value={password}
      className="w-full py-1 px-3  outline-none"      
      placeholder="password"
      readOnly
      ref={passwordref}
      />
      <button
      onClick={passwordcopy} 
      className="flex bg-blue-700 text-white shadow px-3 py-0.5 outline-none shrink-0">Copy</button>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-3">
          <input 
          type="range"
          min={0}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>length:{length}</label>
           
          </div>
          <div className="flex items-center gap-x-3 ">
            <input
            type="checkbox"
            defaultChecked={numberallow}
            onChange={()=>
              {setNumberallow ((prev)=>!prev)}
            }

             />
             <label >Number</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
             type="checkbox"
             defaultChecked={charallow}
            onChange={()=>{setCharallow((prev)=>!prev)}}
            />
          </div>
          <label>Chararcter</label>
          </div>
    </div>
    </>
  )
}

export default App
