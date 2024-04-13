import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiPieChart2Line } from "react-icons/ri";
import { MdInsertChartOutlined } from "react-icons/md";
import { MdWavingHand } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import axios from 'axios';


function Dashboard() {
    const [messages,setMessages]=useState(null)
    const navigate = useNavigate()

    const fetchMessage = async()=>{
        const response = await axios.get("http://localhost:3002/chatbot")
        console.log(response.data.message)
        setMessages(response.data.message)
    }
    const handleLogout=()=>{
        localStorage.removeItem("user")
        navigate("/signin")
    }
    useEffect(()=>{
        const data = localStorage.getItem("user")
        
        if(data){
            const user =  JSON.parse(data)
            if(user.role !== "admin")
                navigate("/signin")
            else{
                fetchMessage()
            }

        }else{
            navigate("/signin")
        }
    },[])
  return (
    <div className='min-h-[100vh] bg-[#111f32]'>
        <div className='flex w-full min-h-[100vh] text-white'>
            <div className='flex flex-col gap-8 px-4 pt-10 w-2/12  min-h-full border-r-[2px] border-white border-opacity-10'>
                <div className='pl-5 mb-5'>
                    <img className=' w-20' src="https://metawebtx.com/static/media/Metawebtx-Logo-300x199.cc78d4b9a240274b247e.png" alt="" />
                </div>
                <div className='pl-5'>
                    <h1 className='text-xl mb-2'>General</h1>
                    <div className=' flex flex-col gap-3'>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <RxDashboard />
                            <h1 className='text-lg'>Dashboard</h1>
                        </div>
                        <div className='flex items-center gap-3 bg-[#27AFE9] p-2 pl-4 rounded-lg min-w-fit'>
                            <MdOutlineMessage />
                            <h1 className='text-lg'>Chatbot</h1>
                        </div>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <FaWheelchair />
                            <h1 className='text-lg'>Patent</h1>
                        </div>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <FaRegCalendarAlt />
                            <h1 className='text-lg'>Department</h1>
                        </div>
                    </div>
                </div>
                <div className='pl-5'>
                <h1 className='text-xl mb-2'>Report</h1>
                    <div className=' flex flex-col gap-3'>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <MdInsertChartOutlined />
                            <h1 className='text-lg'>Analytics</h1>
                        </div>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <RiPieChart2Line />
                            <h1 className='text-lg'>Financial</h1>
                        </div>
                        
                    </div>

                </div>
                <div className='pl-5'>
                <h1 className='text-xl mb-2'>Setting</h1>
                    <div className='flex flex-col gap-3 '>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <FaRegQuestionCircle />
                            <h1 className='text-lg'>Help & Support</h1>
                        </div>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <MdOutlineSettings />
                            <h1 className='text-lg'>Setting</h1>
                        </div>
                        <div className='flex items-center gap-3 p-2 pl-4 rounded-lg min-w-fit'>
                            <IoMdLogOut />
                            <h1 onClick={handleLogout} className='text-lg cursor-pointer'>Logout</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 px-4 pt-10 w-10/12  min-h-full'>
                <div className='pl-5 mb-5 flex justify-between'>
                    <div>
                        <h1 className='text-xl mb-1 font-semibold'>Hello, Vicky Kumar <MdWavingHand className=' inline-block ml-2' color='yellow' /> </h1>
                        <h1 className=' text-xs opacity-70'>Welcome to the Dashboard</h1>
                    </div>
                    <div className='flex gap-10 items-center mr-10'>
                        <BiSolidMessageSquareDetail width={"100px"} />
                        <IoMdNotificationsOutline />
                        <CgProfile />
                    </div>
                </div>
                <div className='bg-black h-[80%] p-10 rounded-lg bg-opacity-35'>
                    <div>
                        <h1 className=' text-lg font-semibold'>Recent Message Sent by User</h1>
                    </div>
                    <div className='flex gap-6 items-center text-[#27AFE9]  p-1 my-4'>
                        <div className='w-[4%] flex justify-center'><h1>Profile</h1></div>
                        <div className='w-2/12 flex justify-center'>
                            <h1>Email</h1> 
                        </div>
                        <h1 className='w-2/12 flex justify-center'>Subject</h1>
                        <h1 className='w-7/12 flex justify-center'>Message</h1>
                    </div>
                    {messages?.map((message)=>{
                        return (
                            <div key={message.id} className='flex gap-6 items-center mt-2 border-2 rounded-lg p-2 mb-2 '>
                                <div className='w-[4%]'><CgProfile size="50px"/></div>
                                <div className='w-2/12'>
                                    <h1>{message.email}</h1>
                                    <div className='flex gap-2 opacity-80'>
                                        <h1>{message.firstName}</h1>
                                        <h1>{message.lastName}</h1>
                                    </div>  
                                </div>
                                <h1 className='w-2/12'>{message.sub}</h1>
                                <h1 className='w-7/12'>{message.message}</h1>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard