import React from 'react'
import man from "./../assets/man.png"
function Auth({isSignin}) {
  return (
    <div className='flex px-[10vw] h-[60vh] mt-[18vh] text-white'>
        <div className='w-1/2 flex justify-center items-center'>
            <img className=' ' src={man} alt="" />
        </div>
        <div className=' w-1/2 p-4  flex flex-col justify-center items-center rounded-lg bg-black bg-opacity-[0.15] shadow-2xl'>
          
            <h1 className='text-center text-4xl font-semibold '>{isSignin?"Sign in":"Sign Up"}</h1>

            <form className='w-8/12' action="" onSubmit={(e)=>e.preventDefault()}>
                <div className='flex flex-col gap-[1vh] mt-5'>
                    <label className='text-xl' htmlFor="email">Email</label>
                    <input name='email' id='email' className=' bg-transparent outline-none border-2 px-4 py-2 text-lg rounded-md placeholder:text-white placeholder:opacity-80' type="text" placeholder='abc@gmail.com' />
                </div>
                <div className='flex flex-col gap-[1vh] mt-5'>
                    <label className='text-xl' htmlFor="password">Password</label>
                    <input name='password' id='password' className=' bg-transparent outline-none border-2 px-4 py-2 text-lg rounded-md placeholder:text-white placeholder:opacity-80' type="password" placeholder='.........' />
                </div>
                <div className=' flex justify-center mt-10'>
                    <button className='bg-blue-900 hover:bg-[#1d2844] shadow-xl w-8/12 px-4 py-2 text-lg rounded-md'>{isSignin?"Sign in":"Sign Up"}</button>
                </div>
               
                
            </form>
          
            
        </div>
    </div>
  )
}

export default Auth