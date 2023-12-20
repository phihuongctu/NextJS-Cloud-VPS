import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function SliderReview() {
  const dataReview = [
    {
      img: "",
      star: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu eleifend sed diam morbi ut. Euismod facilisis neque, enim elementum dis neque, diam etiam ut semper..",
      name: "Raihan Rafuj",
    },
    {
      img: "",
      star: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu eleifend sed diam morbi ut. Euismod facilisis neque, enim elementum dis neque, diam etiam ut semper..",
      name: "Raihan Rafuj",
    },
  ];
  
  return (
    <>
      <Swiper className="mySwiper" loop={true} >
        {dataReview.map(function (item, index) {
          return (
            <SwiperSlide key={index}>
              <div className="w-4/5 m-auto">
                <Image src="/img/user.png" width="80" height="80" alt="user" />                
                <div>
                  <span> <Image src="/img/star.svg" width="20" height="20" alt="star" /></span>
                  <span> <Image src="/img/star.svg" width="20" height="20" alt="star"/></span>
                  <span> <Image src="/img/star.svg" width="20" height="20" alt="star"/></span>
                  <span> <Image src="/img/star.svg" width="20" height="20" alt="star"/></span>
                  <span> <Image src="/img/black-star.svg" width="20" height="20" alt="star"/></span>
                </div>
                <div className="pb-8">
                  <p className="text-gray-400">{item.text}</p>
                  <h3 className=" text-base font-semibold  pt-8">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
