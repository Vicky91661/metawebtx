import React from 'react'

function Header() {
  return (
    <div className='bg-[#0F172A] flex justify-between py-4 px-[10vw]  font-inter text-white shadow-2xl'>
        <div className=''>
            <img className=' w-20' src="https://metawebtx.com/static/media/Metawebtx-Logo-300x199.cc78d4b9a240274b247e.png" alt="" />
        </div>
        <div className=' hover:text-[#38BDF8] flex items-center '>
            <button className='text-lg'>Logout</button>
        </div>
        
    </div>
  )
}

export default Header