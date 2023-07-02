'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from './data.json'
import { Button } from '../ui/button';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

const SliderComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "progressbar",
      }}
    >
      {data.data.map((item, idx) => (
        <SwiperSlide className='bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${item.imgUrl})`}} key={idx+1}>
          <div className='row min-h-[30em] pt-24 px-5'>
            <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 mb-8 backdrop-blur-sm rounded-lg'>
              <div className='text-3xl sm:text-6xl mb-4'>{item.title}</div>
              <div className='text-base sm:text-2xl'>{item.desc}</div>
            </div>
            <Link href={`/blog/${idx+1}`} className={buttonVariants({ variant: "outline" })}>Read More</Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderComponent