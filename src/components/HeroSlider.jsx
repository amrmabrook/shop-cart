import "./../pages/home/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper/modules";

import hero1 from "../photos/hero-1.png";
import hero2 from "../photos/hero-2.png";

function HeroSlider() {
  return (
    <>
      <div className="container">
        <Swiper
        //   navigation={true}
        centeredSlides={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={hero1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HeroSlider;
