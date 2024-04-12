import React from 'react'
import Auth from '../components/Auth'
import Header from '../components/Header'

function Signup() {
  return (
    <div className='bg-[#111f32] w-[100vw] h-[100vh]'>
        <Header/>
        <Auth isSignin={false}/>
    </div>
  )
}

export default Signup