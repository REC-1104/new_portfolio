import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import {TbPointerCheck} from 'react-icons/tb'

const Projects = () => {
  return (
    <>
    <div id='project'>
    <h1 className='w-full text-6xl font-bold text-center mx-auto pt-7 text-[#00df9a]' id='projectTitle'>&lt;PROJECTS.&gt;</h1> 
    <Swiper  id='projectBox'
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          'background':
            'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(https://cdn.dribbble.com/userupload/3240865/file/still-7aecef7b8e7e94a0c9d389de151bec5b.gif?resize=400x300&vertical=center)',
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name">WEEBSTER</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://rec-1104.github.io/Hackbyte-weebster1/" target="_blank" class="anchor" >Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            All in one WEB-APP to browse anime , manga and songs. 
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name">SKY CAST</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://rec-1104.github.io/SpaceInvaders/" target="_blank" class="anchor">Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            A WEB-APP which can gives you real time weather info of desired place.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name">GLUTTONOUS SNAKE</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://rec-1104.github.io/GluttonousSnake/" target="_blank" class="anchor">Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            An old school game made in JS.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name">RATING PREDICTOR</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://rec-1104.github.io/Rating-Predictor/" target="_blank" class="anchor">Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            A WEB-APP which can predict your codeforces rating based on your codechef rating and vice versa. 
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name" >Space Invaders</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://rec-1104.github.io/SpaceInvaders/" target="_blank" class="anchor">Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            An old school game recreated with modern flavour.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
        <h3 class="project_name">ZODIAC LUCK METER</h3>
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
        <a href="https://lucky-day-prediction.vercel.app/" target="_blank" class="anchor">Visit<TbPointerCheck /></a>
        </div>
        <div className="text" data-swiper-parallax="-100">
          <br /><br /><p>
            A real time luck predictor based on some voodo shit of multiple linear regression algorithms.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </>
  )
}

export default Projects