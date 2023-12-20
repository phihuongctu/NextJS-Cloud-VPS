import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function SliderDashboard() {
  return (
    <>
      <Swiper navigation={true} className="mySwiper" loop={true}>
        <SwiperSlide>
          <Image src="/img/slider.jpg" width={1024} height={400} alt="dashboard" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/slider.jpg" width={1024} height={400} alt="dashboard"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/slider.jpg" width={1024} height={400} alt="dashboard"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
