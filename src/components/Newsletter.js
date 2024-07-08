import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-12'>
        <div className="max-w-[1000] grid md:grid-cols-3  items-center justify-center">
            <div className='pl-10 max-w-[500px]  h-[50px]'>
                <h1 className='text-white'>Want tips & tricks to optimize your ideas</h1>
                <h1 className='text-white'>Sign up to our news letter and stay up to date</h1>
            </div>
            <div className='pl-10'>
            <div className='flex flex-cols-2 gap-4 '>
                <input className="w-[140px] h-[30px] rounded-md text-center" type="Email" name="Enter the name" 
                placeholder='Enter Email'/>
                <button className=' bg-green-300 rounded-md  text-red-300 w-[140px] h-[30px] text-sm' 
                >Notify Me</button>  </div>
   <h1 className='text-green-300 text-[14px] mt-2'>We care about the protection of your data,Read our    <a href="#" className='text-red-300 hover-underline'>Privacy Policy.</a></h1></div>
      </div>

        </div>
      

  )
}

export default Newsletter
