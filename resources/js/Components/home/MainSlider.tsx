import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/resources/css/mainSlider.css';

// import required modules

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from '@inertiajs/react';

export default function MainSlider() {
    const sliders = [
        {
            id: 1,
            title: "Instrumentos de Gestión Ambiental.",
        },
        {
            id: 2,
            title: "Servicios de Monitoreos Ambientales.",
        },
        {
            id: 3,
            title: "Servicios de Monitoreos Ocupacionales.",
        },
        {
            id: 4,
            title: "Construcción de Sistemas de Tratamiento.",
        },
        {
            id: 5,
            title: "Elaboración de Expedientes Técnicos.",
        }
    ]

  return (
    <>
      <Swiper
        modules={[Pagination,Navigation, Autoplay]}
        className="w-full h-full rounded-md"
        pagination={true}
        loop={true}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      >
        {
            sliders.map(slider =>
                <SwiperSlide key={slider.id}>
                    <img src={`/images/banner${slider.id}.png`} alt="banner1" />
                    <div></div>
                    <p>
                        <span className='block px-8 pb-16 text-4xl md:text-6xl'>{slider.title}</span>
                        <Link href={route('services.instrumentos-de-gestion-ambiental')} className='px-6 py-4 text-lg transition-colors bg-green-500 rounded-full hover:bg-green-600'>
                            Conoce más
                            <svg className='inline mb-1 ml-2' width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="20,10 80,50 20,90" fill="#fff"/>
                            </svg>
                        </Link>
                    </p>
                </SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
