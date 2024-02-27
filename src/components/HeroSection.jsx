import React from 'react'
import livingRoom from "../assests/images/livingRoom.webp"
import livingRoomResponsive from "../assests/images/livingRoomResponsive.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

function HeroSection() {
    return (
        <div className='bg-[#a59a8f] w-full h-[70vh] lg:h-[100vh] '>

            <Swiper className="mySwiper heroSwiper" effect='fade' pagination={{ clickable: true }} 
            
           loop = {true}

            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}   modules={[EffectFade, Navigation, Pagination,Autoplay]}>

                <SwiperSlide>
                    <div className=' heroImage w-full h-full relative text-white flex flex-col items-center justify-center gap-3 px-3'>
                        <div className='bg-black absolute h-full w-full opacity-[0.7] '></div>
                        <h1 className='text-[#5ed4c0] z-10 font-bold text-5xl'>FurnIt.</h1>
                        <p className='text-2xl font-semibold z-10 w-full text-center '>"Furnishing Dreams, Crafting Comfort - Welcome to FurnIt."</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' heroImage2 w-full h-full relative text-white flex flex-col items-center justify-center gap-3 px-3'>
                        <div className='bg-black absolute h-full w-full opacity-[0.7] '></div>
                        <h1 className='text-[#5ed4c0] z-10 font-bold text-5xl'>FurnIt.</h1>
                        <p className='text-2xl font-semibold z-10 w-full text-center '>"Furnishing Dreams, Crafting Comfort - Welcome to FurnIt."</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' heroImage3 w-full h-full relative text-white flex flex-col items-center justify-center gap-3 px-3'>
                        <div className='bg-black absolute h-full w-full opacity-[0.7] '></div>
                        <h1 className='text-[#5ed4c0] z-10 font-bold text-5xl'>FurnIt.</h1>
                        <p className='text-2xl font-semibold z-10 w-full text-center '>"Furnishing Dreams, Crafting Comfort - Welcome to FurnIt."</p>
                    </div>
                </SwiperSlide>

            </Swiper>




        </div>
    )
}

export default HeroSection