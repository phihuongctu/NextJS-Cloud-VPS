import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataFAQ } from "../Dashboard/FAQ/sectionFAQ"
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function SliderSupport() {
  return (
    <>
      <Swiper
        className="mySwiper"
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {dataFAQ.map(function (item, index) {
          return (
            <SwiperSlide className="w-9/12 sm:w-3/5 md:w-2/5 pb-2 px-1" key={index}>
              <a>
                 <div className="w-full bg-white rounded-2xl overflow-hidden shadow">
                <Image src={`${item.img}`} width="400" height="216" alt="faq"/>
                <div className="px-4 pt-4">
                  <h6>{item.title}</h6>
                </div>
                <div className="p-4 flex">
                  <Image src="/img/time.svg" width="22" height="22" alt="time" />
                  <p className="ml-2 text-sm opacity-50">{item.time}</p>
                </div>
              </div>
              </a>
             
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
