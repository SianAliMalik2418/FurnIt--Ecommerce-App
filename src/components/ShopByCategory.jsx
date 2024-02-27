import React from 'react'
import CardCarousel from "../components/CardCarousel"



function ShopByCategory() {
  return (
    <div className=' flex flex-col  items-center justify-center gap-10 h-fit lg:h-screen bg-[#202020] text-white px-5 py-10' >
      <h1 className='text-4xl font-semibold mt-10 lg:hidden'>Shop By Category</h1>

        <div className='lg:hidden'>
        <CardCarousel />

        </div>


      <span className='mt-5 md:text-2xl lg:hidden'>"Discover comfort in the living room, cook up joy in the kitchen, share laughter in the dining room, and find serenity in the bedroom. Transform your home with our cozy categories!"</span>

      <div className='lg:flex gap-3 mt-10 hidden'>
        <div className='w-[50%] '>
          <CardCarousel />

        </div>
        <div className=' md:text-2xl  flex flex-col  gap-3 w-[50%]'>
          <h1 className='text-[2.7rem] font-bold mt-10'>Welcome to FurnIt!</h1>
          <p className='w-[70%] text-xl  mt-5'>FurnIt is a modern furniture website which provides you latest and modern furniture designs.Explore an exquisite range of home essentials, from cozy living room setups to stylish kitchen solutions, elegant dining ensembles, and tranquil bedroom retreats. </p>

          <p className='text-[#9E9E9E] w-[70%] text-lg mt-5'>With more than 50+ furniture available for you to see and order it.We also provide free home delivery.</p>
        </div>
      </div>




    </div>
  )
}

export default ShopByCategory






