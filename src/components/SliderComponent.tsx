'use client'

import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { sliderType, sliderData } from '@/lib/sliderData'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CandidatureFormComponent} from "@/components/CandidatureFormComponent";
import Image from "next/image";
import {cn} from "@/lib/utils";

export const SliderComponent = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                sliderData.map((slider: sliderType)=>(

                    <SwiperSlide key={slider.id}  className={cn('relative z-0 min-h-screen bg-center bg-cover w-full border bg-no-repeat overflow-hidden', slider.img)}>

                        <div className={'bg-gray-950/50 h-full w-full flex items-end absolute bottom-0'}>
                            <div className={'w-[90%] sm:w-1/4 flex flex-col gap-2 ml-5 sm:ml-20 relative bottom-80 sm:bottom-96'}>
                                <h1 className={'text-3xl text-custom-orange'}>{slider.title} </h1>
                                <h2 className={'text-2xl text-white font-bold'}>{slider.subtitle}</h2>
                                <p className={'text-white text-sm'}>{slider.text}</p>
                                {/*<CandidatureFormComponent/>*/}
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}