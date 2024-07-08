import React,{useState }from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handclick=()=>{
      setNav(!nav);
    }
  
  return (
    <div>
     <div className="flex max-w-7xl   text-6xl   text-white   justify-between items-center mx-auto
     px-4 h-40">
        <h1 className=" w-full text-3xl text-white px-1">React</h1>
        <nav>                                                                                                                                                                                                                                                                                                                                                                                                           
 <ul className='hidden pt-35 pl-5 text-sm text-green-400'>
         <li className='p-4 border-b border-b-gray-900'>Home</li>
         <li className='p-4 border-b border-b-gray-900'>Company</li>
         <li className='p-4 border-b border-b-gray-900'> Resources</li>
         <li className='p-4 border-b border-b-gray-900'>About</li>
         <li className='p-4'>Contact</li>
     </ul></nav> 
 
 <div onClick={handclick}>
        {nav ?<RxCross2 size={40}/>:<FiAlignJustify size={40}/>}</div>

<div className={nav ? "fixed left-0 top-0 h-full w-[20%] border-r border-r-gray-700 bg-black ease-in-out duration-500":
  "fixed left-[-100%]"}>
     <h1 className="pt-10 w-full text-3xl m-4 text-white ">React</h1>
  <nav>                                                                                                                                                                                                                                                                                                                                                                                                           
 <ul className='pt-35 pl-5 text-sm text-green-400 cursor-pointer'>
         <li className='p-4 border-b border-b-gray-900'>Home</li>
         <li className='p-4 border-b border-b-gray-900'>Company</li>
         <li className='p-4 border-b border-b-gray-900'> Resources</li>
         <li className='p-4 border-b border-b-gray-900'>About</li>
         <li className='p-4'>Contact</li>
     </ul></nav> 
  </div>

      </div></div>
  )
}

export default Navbar
