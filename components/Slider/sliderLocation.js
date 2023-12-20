import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function SliderLocation() {
  const dataCountry = [
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
      value: "hochiminh",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
    {
      city: "Ho Chi Minh",
      country: "Viet Nam",
      img: "/img/flag.svg",
    },
  ];
  return (
    <>
      <Swiper slidesPerView={5} className="mySwiper" loop={true} >
        {dataCountry.map(function (item, index) {
          return (
            <SwiperSlide key={index} className="min-w-min">
              <div className="p-4 mr-4 mb-4 bg-col flex-row rounded-lg w-48 flex justify-center items-center">
                <div className="justify-start flex content-center">
                  <Image src={`${item.img}`} width="40" height="40" alt="flag" />
                </div>
                <div className=" justify-end mx-3 text-left">
                  <a>
                    <span>{item.city}</span>
                  </a>
                  <p className=" text-xs text-gray-400">{item.country}</p>
                </div>
              </div> 
              <div className="p-4 mr-4 mb-4 bg-col flex-row rounded-lg w-48 flex justify-center items-center">
                <div className="justify-start flex content-center">
                  <Image src={`${item.img}`} width="40" height="40" alt="flag" />
                </div>
                <div className=" justify-end mx-3 text-left">
                  <a>
                    <span>{item.city}</span>
                  </a>
                  <p className=" text-xs text-gray-400">{item.country}</p>
                </div>
              </div>                         
            </SwiperSlide>
          );
        })}
        )
      </Swiper>
    </>
  );
}
