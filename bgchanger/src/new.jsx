import { useState } from "react"


function Chap(){
   const[color, setColor]= useState("pink")
    return (
        <div className="w-full h-screen  duration-200" style={{background: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 px-3 py-2 inset-x-0">
                <div className="flex flex-wrap px-4 py-3 bg-black shadow-md  rounded-lg gap-3">
                    <button onClick={()=>{setColor("red")}}
                    className="flex flex-wrap text-white rounded-lg outline-none shadow-sm px-3 py-2" style={{backgroundColor :"red"}} >red</button>
                    <button onClick={()=>{setColor("grey")}}
                    className="flex flex-wrap text-pink-500 rounded-lg outline-none shadow-sm px-3 py-2" style={{backgroundColor :"grey"}} >grey</button>
                    <button onClick={()=>{setColor("yellow")}}
                    className="flex flex-wrap text-black rounded-lg outline-none shadow-sm px-3 py-2" style={{backgroundColor :"yellow"}} >yelllow</button>
                   <button onClick={()=>{setColor("#00ffA5")}}
                    className="flex flex-wrap text-black rounded-lg outline-none shadow-sm px-3 py-2" style={{backgroundColor :"#00ffA5"}} >neon</button>
                    <button onClick={()=>{setColor("pink")}}
                    className="flex flex-wrap text-black rounded-lg outline-none shadow-sm px-3 py-2" style={{backgroundColor :"pink"}} >Default</button>
                    </div>

                </div>
            </div>


    )
}
export default Chap