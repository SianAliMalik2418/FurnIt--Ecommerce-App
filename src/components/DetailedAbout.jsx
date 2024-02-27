import React from 'react'
import { IoRocketOutline } from "react-icons/io5";
import { TiLockClosedOutline } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";

function DetailedAbout() {
  return (
    <div id='service' className='bg-[#FEF9F4] w-full px-10 flex flex-col items-center mt-20 py-10 lg:h-[80vh]'>
     <div className='flex flex-col justify-center items-center gap-24'>
         <h1 className='text-4xl font-bold lg:mt-10'>We guarantee the safety of your shopping</h1>

         <div className='flex flex-col gap-24 lg:flex-row'>
         <div className='flex flex-col justify-center  w-full gap-3'>
            <div className='flex items-center gap-3'>
             <IoRocketOutline size={20}/>
             <span className='text-black font-medium text-xl lg:text-2xl'>Fast Shipping</span>
            </div>
             <span className=''>Swift and efficient, our fast furniture delivery ensures that your chosen pieces are seamlessly transported from our showroom to your doorstep. </span>
        </div>

        <div className='flex flex-col justify-center  w-full gap-3'>
            <div className='flex items-center gap-3'>
             <TiLockClosedOutline size={20}/>
             <span className='text-black font-medium text-xl lg:text-2xl'>Safe Delivery</span>
            </div>
             <span className=''>Experience peace of mind with our furniture app's secure delivery. Our meticulous handling ensures damage-free transport, prioritizing your items' safety. </span>
        </div>

        <div className='flex flex-col justify-center  w-full gap-3'>
            <div className='flex items-center gap-3'>
             <FiPhone size={20}/>
             <span className='text-black font-medium text-xl lg:text-2xl'>24/7 Call Service</span>
            </div>
             <span className=''>Stay connected with our furniture app's 24/7 call service. Promptly address queries, provide assistance, and ensure exceptional customer support round the clock.. </span>
        </div>
         </div>

        

     </div>
    </div>
  )
}

export default DetailedAbout