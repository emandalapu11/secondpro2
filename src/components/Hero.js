import React from 'react';
import Laptop from "../components/img/laptop.jpeg"

const Hero = () => {
  return (
    <div className='w-full bg-white mt-10 py-20 px-20'>
    <div className=" max-w-[70%] text-6xl grid md:grid-cols-2   text-gray-400">
   <figure class="max-w-[500px]"> 
   <img  src={Laptop}
  alt="/" h="30" w="30"/>
 </figure>
 <div className='flex flex-col justify-center'>
 <h1 className=' text-green-300  text-lg'>Data Analytics DASH BOARD</h1>
 <h1 className='flex text-red-300 text-xl'>Manage Data Analytics Centrally</h1>
 <p className="text-gray-400 text-lg">Adding images to the .navbar-brand will likely always
  require custom styles or utilities to properly size.
   Here are some examples to demonstrate.</p>
<button className='w-[120px] bg-green-300 rounded-md  text-red-300 py-2 px-2 ml-10 my-6 mt-4 text-sm' >Get Started</button>
 </div></div> </div>
 

 )
}

export default Hero
