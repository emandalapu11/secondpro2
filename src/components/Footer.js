import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaDribbbleSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full  bg-green-300 py-5 px-5'>
        <div className='max-w-[25]  pl-10 grid grid-cols-2'>
            <div className='md:w-[50%] '>
                <h1 className='w-full text-white text-3xl'>React.</h1>
                <p className='py-10'>Adding images to the .navbar-brand will likely always
                require custom styles or utilities to properly size.Here are some examples to demonstrate.</p>
                <div className=' text-red-300 flex justify-between md:w-[50%]'>
                <FaGithub />
                <FaTwitter />
                <FaFacebookF />
                <RiInstagramFill />
                <FaDribbbleSquare /> </div>

            </div>
            <div className='max-w-[100]  mt-20 grid grid-cols-4'>
                <div>
                    <h6 className='font-bold'>Solutions</h6>
                    <ul>
                        <li className='py-2'>Analytics</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
                <div>
      <h6 className='font-bold'>Support</h6>
      <ul>
          <li className='py-2'>Pricing</li>
          <li className='py-2'>Documentation</li>
          <li className='py-2'>Guidelimes</li>
          <li className='py-2'>API Studies</li>
      </ul>
  </div>
  <div>
      <h6 className='font-bold'>Company</h6>
      <ul>
          <li className='py-2'>About</li>
          <li className='py-2'>Blog</li>
          <li className='py-2'>Jobs</li>
          <li className='py-2'>Careers</li>
      </ul>
  </div>
  <div>
      <h6 className='font-bold'>Legal</h6>
      <ul>
          <li className='py-2'>Policy</li>
          <li className='py-2'>Claim</li>
          <li className='py-2'>Terms</li>
      </ul>
  </div>    </div>
  </div> </div>
  )
}

export default Footer
