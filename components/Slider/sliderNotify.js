import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useState } from "react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function SliderNotify() {
    const [status, setStatus] = useState("All");
    const dataTagNotify = [
        {
            tag: "Tất cả"
        },
        {
            tag: "Dịch vụ & Thanh toán"
        },
        {
            tag: "Dịch vụ"
        },
        {
            tag: "Hỏi đáp"
        },
        {
            tag: "Hỏi đáp 1"
        },
    ];
    return (
        <>
            <Swiper slidesPerView={'auto'} className="mySwiper w-80" loop={true}>
                {dataTagNotify.map(function (item, index) {
                    const changeStatus = () => setStatus(item.tag);
                    return (
                        <SwiperSlide key={index} className="max-w-min">
                            <Link href="#">
                                <div className={`bg-white bg-opacity-30 w-min p-2 mr-2 mb-2 rounded-lg text-white text-clampSx cursor-pointer                         ${item.tag === status
                                    ? "bg-opacity-100 text-blue-400"
                                    : ""
                                    }`}
                                    onClick={changeStatus}>
                                    <span className="whitespace-nowrap">{item.tag}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            )
            </Swiper>
        </>
    );
}
