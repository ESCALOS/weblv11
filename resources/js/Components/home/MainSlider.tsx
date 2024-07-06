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
import TriangleRight from '../icons/triangleRight';

export default function MainSlider() {
    const sliders = [
        {
            id: 1,
            title: "Instrumentos de Gestión Ambiental.",
            redirect: route('services.service1')
        },
        {
            id: 2,
            title: "Servicios de Monitoreos Ambientales.",
            redirect: route('services.service2')
        },
        {
            id: 3,
            title: "Servicios de Monitoreos Ocupacionales.",
            redirect: route('services.service3')
        },
        {
            id: 4,
            title: "Construcción de Sistemas de Tratamiento.",
            redirect: route('services.service4')
        },
        {
            id: 5,
            title: "Elaboración de Expedientes Técnicos.",
            redirect: route('services.service5')
        }
    ]

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
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
                        <Link href={slider.redirect} className='px-12 py-4 text-lg text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600'>
                            Conoce más
                            <TriangleRight color='white' size={20} />
                        </Link>
                    </p>
                </SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
