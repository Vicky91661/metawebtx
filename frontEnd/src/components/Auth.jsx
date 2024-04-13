import React from 'react'
import man from "./../assets/man.png"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Auth({isSignin}) {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)

    const navigate = useNavigate()

    const handleSignin= async()=>{
        setLoading(true)
        if(isSignin){
            try {
                const response = await axios.post("http://localhost:3002/user/signin",formData)
                const data = response.data
                const user = JSON.stringify(data)
                localStorage.setItem("user",user)
                if(data.role==="admin"){
                    navigate("/dashboard")
                }
                navigate("/chatbot")
            } catch (error) {
                setError(error.response.data.message)
            }finally{
                setLoading(false)
            }
            
        }else{
            try {
                const response = await axios.post("http://localhost:3002/user/signup",formData)
                const data = response.data
                const user = JSON.stringify(data)
                localStorage.setItem("user",user)
                if(data.role==="admin"){
                    navigate("/dashboard")
                }
                navigate("/chatbot")
            } catch (error) {
                setError(error.response.data.message)
            }finally{
                setLoading(false)
            }
        }
            
    }
    const handleChange= (e)=>{
        setError(null)
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}))
    }
    if(loading){
        return <div className='flex justify-center items-center text-white'>
            <h1 className='text-5xl'>Loading.....</h1>
        </div>
    }
  return (
    <div className='flex px-[10vw] h-[60vh] mt-[13vh] text-white'>
        <div className='w-1/2 flex justify-center items-center'>
            <img className=' ' src={man} alt="" />
        </div>
        <div className=' w-1/2 p-4  flex flex-col justify-center items-center rounded-lg bg-black bg-opacity-[0.15] shadow-2xl'>
          
            <h1 className='text-center text-4xl font-semibold '>{isSignin?"Sign in":"Sign Up"}</h1>

            <form className='w-8/12' action="" onSubmit={(e)=>e.preventDefault()}>
                <div className='flex flex-col gap-[1vh] mt-5'>
                    <label className='text-xl' htmlFor="email">Email</label>
                    <input onChange={handleChange} name='email' id='email' className=' bg-transparent outline-none border-2 px-4 py-2 text-lg rounded-md placeholder:text-white placeholder:opacity-80' type="text" placeholder='abc@gmail.com' />
                </div>
                <div className='flex flex-col gap-[1vh] mt-5'>
                    <label className='text-xl' htmlFor="password">Password</label>
                    <input onChange={handleChange} name='password' id='password' className=' bg-transparent outline-none border-2 px-4 py-2 text-lg rounded-md placeholder:text-white placeholder:opacity-80' type="password" placeholder='.........' />
                </div>
                <div className=' flex justify-center mt-10'>
                    <button onClick={handleSignin} className='bg-blue-900 hover:bg-[#1d2844] shadow-xl w-8/12 px-4 py-2 text-lg rounded-md'>{isSignin?"Sign in":"Sign Up"}</button>
                </div>
            </form>
            {error && <div className='text-red-700 text-2xl mt-5'>{error}</div>}
          
            
        </div>
    </div>
  )
}

export default Auth