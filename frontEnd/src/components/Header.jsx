import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const [isLogedin,setIsLogedin]=useState(false)
    const navigate = useNavigate()
  
    useEffect(()=>{
        const data = localStorage.getItem("user")
        console.log("User data inside the header",data)
        if(data){
            setIsLogedin(true)
            const user =  JSON.parse(data)
            if(user.role === "admin")
                navigate("/dashboard")
            else
                navigate("/chatbot")
        }
    },[])

    const handlelogedout=()=>{
        setIsLogedin(false)
        localStorage.removeItem("user")
        navigate("/signin")
    }

  return (
    <div className='bg-[#0F172A] flex justify-between py-4 px-[10vw]  font-inter text-white shadow-2xl'>
        <div className=''>
            <img className=' w-20' src="https://metawebtx.com/static/media/Metawebtx-Logo-300x199.cc78d4b9a240274b247e.png" alt="" />
        </div>
        {isLogedin && <div className=' hover:text-[#38BDF8] flex items-center '>
            <button onClick={handlelogedout} className='text-lg'>Logout</button>
        </div>}
        
        
    </div>
  )
}

export default Header