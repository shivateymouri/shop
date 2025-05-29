"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../assets/css/styles.css";
import Image from "next/image";
import picone from '../../assets/img/slide-one.jpeg';
import pictwo from '../../assets/img/slide-two.jpeg';
import picthree from '../../assets/img/slide-three.jpeg';
import picfour from '../../assets/img/slide-four.jpeg';
import picfive from '../../assets/img/slide-five.jpeg';
import picsix from '../../assets/img/slide-six.jpeg';
import picseven from '../../assets/img/slide-seven.jpeg';
import piceight from '../../assets/img/slide-eight.jpeg';
export default function page() {
  return (
    <div className="bg-white">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={picone} alt='slider-one'/>
        </SwiperSlide>
        <SwiperSlide>
          
          <Image src={pictwo} alt='slider-two'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picthree} alt='slider-three'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picfour} alt='slider-four'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picfive} alt='slider-five'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picsix} alt='slider-six'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picseven} alt='slider-seven'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={piceight} alt='slider-eight'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
