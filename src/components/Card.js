import React from 'react'
import { RiUserHeartFill } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
const Card = () => {
  return (
    <div className='w-full bg-white px-20 py-20 mt-10'>
        <div className='max-w-[100]  grid grid-cols-3'>
            <div className=' shadow-xl rounded-lg bg-gray-100 mr-10 mt-8 hover:bg-gray-300 pb-2'>
                <div className='w-20 h-[50px] mx-auto mt-3'>
            <RiUserHeartFill  size={30} color='yellow' /></div>
            <div className=' pl-5 pr-5'>
            <h1 className='text-green-500 font-bold text-center '>Single User</h1>
            <h1 className='font-bold text-green-500 border-b text-center mt-4'>$ 149</h1>
            <h1 className='font-bold text-green-500 border-b   text-center mt-4'>500 GB Storage</h1>
            <h1 className='font-bold text-green-500 border-b text-center mt-4'>1 User allowed</h1>
            <h1 className='font-bold text-green-500 border-b text-center mt-4'>Sent upto 2GB</h1>
            <button className=' bg-red-100 rounded-xl w-[150px]  mx-auto ml-20 py-1 px-2 mt-5
              hover:bg-blue-500'>Start Trial</button>
            </div></div>
            <div className=' shadow-md rounded-lg bg-gray-100 mt-8  mr-10 hover:bg-gray-300 pb-2'>
       <div className='w-20 h-[50px] mx-auto mt-3'>
   <HiOutlineUsers   size={30} color='yellow' /></div>
   <div className=' pl-5 pr-5'>
   <h1 className='text-green-500 font-bold text-center '>Partnership</h1>
   <h1 className='font-bold text-green-500 border-b text-center mt-4'>$ 199</h1>
   <h1 className='font-bold text-green-500 border-b   text-center mt-4 '>5TB Storage</h1>
   <h1 className='font-bold text-green-500 border-b text-center mt-4'>3 Users Allowed</h1>
   <h1 className='font-bold  pr-5 text-green-500 border-b text-center mt-4'>Sent upto 10GB</h1>
   <button className=' bg-red-100  rounded-xl w-[150px]  mx-auto ml-20 py-1 px-2 mt-5 
   hover:bg-blue-500'>Start Trial</button></div>
   </div>
   <div className=' shadow-md  rounded-lg bg-gray-100 mt-8 mr-10 hover:bg-gray-300 pb-2'>
       <div className='w-20 h-[50px] mx-auto mt-3'>
  
   <TbUsersGroup  size={30} color='yellow' /></div>
   <div className=' pl-5 pr-5'>
    <h1 className='text-green-500 font-bold text-center'>Group Account</h1>
   <h1 className='font-bold text-green-500 border-b text-center mt-4 space-x-4'>$ 299</h1>
   <h1 className='font-bold text-green-500 border-b   text-center mt-4'>5TB Storage</h1>
   <h1 className='font-bold text-green-500 border-b text-center mt-4'>10 Users Allowed</h1>
   <h1 className='font-bold text-green-500 border-b text-center mt-4'>Sent upto 20GB</h1>
   <button className=' bg-red-100 rounded-xl w-[150px]  mx-auto ml-20 py-1 px-2 mt-5
     hover:bg-blue-500'>Start Trial</button>
   </div></div>
        </div>
      
    </div>
  )
}

export default Card
