import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Dashboard() {
    const navigate = useNavigate()
    useEffect(()=>{
        const data = localStorage.getItem("user")
        
        if(data){
            const user =  JSON.parse(data)
            if(user.role !== "admin")
                navigate("/signin")
        }else{
            navigate("/signin")
        }
    },[])
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Dashboard