import React, { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import devBookImage from '../../devbook.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// import required modules
import { Scrollbar } from 'swiper/modules'

export const MainCarousel = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  }

  return (
    <div className="w-3/4 m-auto bg-gradient-to-r from-gray-400 via-secondary via-40% to-gray-400 rounded-sm">
      <Swiper
        modules={[Scrollbar]}
        className="mySwiper"
        scrollbar={{ hide: false }}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="DevBook"
            alt="devbook"
            image={devBookImage}
            description="A social media platform for developers"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
