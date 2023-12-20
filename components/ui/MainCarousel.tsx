import React, { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import devBookImage from '../../public/dev_book.png'
import stickers from '../../public/stickers.png'
import ask from '../../public/ask.png'
import calculator from '../../public/calculator_app.png'
import todo from '../../public/todo_list.png'
import portfolioAngus from '../../public/angus_portfolio.png'
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
            notDisabled={true}
            siteLink="https://www.devbook.live/"
            codeLink="https://github.com/sunnyeyles/DevBook"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="A S K"
            alt="ask e-commerce site"
            image={ask}
            description="An E-commerce platform"
            notDisabled={true}
            siteLink="https://sunnyeyles.github.io/React-Ecommerce-Project/"
            codeLink="https://github.com/sunnyeyles/React-Ecommerce-Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="Todo App"
            alt="todo app"
            image={todo}
            description="A simple todo app to keep track of tasks"
            notDisabled={true}
            siteLink="https://doing-beryl.vercel.app/"
            codeLink="https://github.com/sunnyeyles/doing"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="Stickers"
            alt="stickers"
            image={stickers}
            description="An E-Commerce site selling stickers"
            notDisabled={false}
            codeLink="https://github.com/sunnyeyles/STICKERS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="JS calculator"
            alt="js calculator"
            image={calculator}
            description="A funky looking calculator"
            notDisabled={true}
            siteLink="https://03-project-calulator-sunnyeyles.vercel.app/"
            codeLink="https://github.com/sunnyeyles/03-project-calulator/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="Angus' Portfolio"
            alt="angus' portfolio"
            image={portfolioAngus}
            description="A portfolio website for a friend"
            notDisabled={true}
            siteLink="https://sunnyeyles.github.io/Portfolio-layout/"
            codeLink="https://github.com/sunnyeyles/Portfolio-layout"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
