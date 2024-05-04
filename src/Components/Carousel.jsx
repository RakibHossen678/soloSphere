// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import img1 from '../assets/carousel1.jpg'
import img2 from '../assets/carousel2.jpg'
import img3 from '../assets/carousel3.jpg'

const Carousel = () => {
  return (
    <div className="container px-14  py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide img={img1} text='Get Your Web Developer Projects Done in Minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={img2} text='Get Your Graphics Design Projects Done in Minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={img3} text='Start Your Digital Marketing Campaign running'></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
