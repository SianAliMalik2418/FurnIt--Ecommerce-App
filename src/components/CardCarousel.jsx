import React from 'react'
import "../cardCarousel.css"

import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, EffectCards, Navigation, Autoplay } from 'swiper/modules';

import carouselImage1 from "../assests/images/single-sofa-01.jpg"
import carouselImage2 from "../assests/images/table-2.jpg"
import carouselImage3 from "../assests/images/bedroom.jpeg"
import carouselImage4 from "../assests/images/livingRoom.webp"
import carouselImage5 from "../assests/images/kitchen.jpg"

function CardCarousel() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}

                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                effect={'cards'}
                grabCursor={true}
                modules={[Pagination, EffectCards, Navigation, Autoplay]}
                className="mySwiper cardSwiper"
            >

                <SwiperSlide className='px-4 py-4'>
                    <div className=' w-[280px] h-[450px] md:h-[550px]  md:w-[30rem] lg:h-[25rem] lg:w-[20rem] pb-3 rounded-md flex flex-col items-center justify-center gap-4 text-black '>
                        <div className='w-full h-[65%] image'>
                            <img src={carouselImage4} className='w-full h-full object-center object-cover' alt="" />
                        </div>
                        <h1>Living Room</h1>

                        <Link to = {"/products"} className='border-2 border-black  outline-none rounded-md px-7 py-2'>Start Shopping</Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='px-4 py-4'>
                    <div className=' w-[280px] h-[450px]  md:h-[550px] md:w-[30rem]  lg:h-[25rem] lg:w-[20rem] pb-3 rounded-md flex flex-col items-center text-black justify-center gap-4 '>
                        <div className='w-full h-[65%] image'>
                            <img src={carouselImage5} className='w-full h-full object-center object-cover' alt="" />
                        </div>
                        <h1>Kitchen</h1>
                        <Link to = {"/products"} className='border-2 border-black  outline-none rounded-md px-7 py-2'>Start Shopping</Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='px-4 py-4'>
                    <div className=' w-[280px] h-[450px]  md:h-[550px] md:w-[30rem]  lg:h-[25rem] lg:w-[20rem] pb-3 rounded-md flex flex-col items-center text-black justify-center gap-4 '>
                        <div className='w-full h-[65%] image'>
                            <img src={carouselImage3} className='w-full h-full object-center object-cover' alt="" />
                        </div>
                        <h1>Bedroom</h1>
                        <Link to = {"/products"} className='border-2 border-black  outline-none rounded-md px-7 py-2'>Start Shopping</Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='px-4 py-4'>
                    <div className=' w-[280px] h-[450px]  md:h-[550px] md:w-[30rem]  lg:h-[25rem] lg:w-[20rem] pb-3 rounded-md flex flex-col items-center text-black justify-center gap-4 '>
                        <div className='w-full h-[65%] image'>
                            <img src={carouselImage2} className='w-full h-full object-center object-cover' alt="" />
                        </div>
                        <h1>Dining</h1>
                        <Link to = {"/products"} className='border-2 border-black  outline-none rounded-md px-7 py-2'>Start Shopping</Link>
                    </div>
                </SwiperSlide>




            </Swiper>
        </>
    )
}

export default CardCarousel