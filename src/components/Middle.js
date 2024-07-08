import React from 'react'
import {Typewriter } from 'react-simple-typewriter';


const Middle = ()=>{
 
  return (
    <div>
     <div className='grid text-sm text-green-300 mx-6xl px-10 justify-center items-center text-center'>
 <h1 className='text-red font-serif text-[10px] text-center '>GROWING  WITH  DATA  ANALYTICS</h1>
 <h1 className='md:text-6xl sm:text-5xl text-white font-serif text-4xl'>Grow with data.</h1>

 <div>
 <p className='font-serif text-4xl text-gold-400'>Fast, flexible financing for{' '}
<span>
 <Typewriter className="text-red-300" words={['BTB','BTC','SASS']}
 loop={6}
 typeSpeed={70}
 deleteSpeed={89}/></span></p></div>
 <p className='text-gray-300 font-serif md:text-xl sm:text-sm text-l'>Monitor your data analytics 
to increase revenue for BTC ,BTB,SASS platforms.</p>
<button className='text-xl text-black rounded-xl bg-red-400 py-2 w-[200px] mx-auto'>Get Started</button></div>
      
    </div>
  )
}

export default Middle
