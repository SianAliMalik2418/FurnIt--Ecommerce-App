import React from 'react'
import sofa from "../assests/images/double-sofa-01.png"



function About() {
  return (
    <div id='about' className='mt-40 about bg-[#FEE3CA] w-full  flex flex-col lg:flex-row lg:px-20 gap-4 items-center justify-between px-3 py-4 pt-16'>

         <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold lg:text-3xl'>Modern Interior</h1>
            <p className='text-3xl font-semibold lg:text-4xl'>Arrange your home in such a way with our modern interiors</p>
           
            <button className='px-6 py-2 w-fit mt-4 border-2 border-black text-black'>Shop Now</button>
         </div>

         <img src={sofa} alt="" />

    </div>
  )
}

export default About