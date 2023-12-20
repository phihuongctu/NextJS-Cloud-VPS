import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
export default function Tag(props) {
  const [status, setStatus] = useState("All");

  const dataTagTicket = [
    {
      tag: "Closed",
    },
    {
      tag: "Answered",
    },
    {
      tag: "Processing",
    },
    {
      tag: "Pending",
    },
  ];
  const dataTagMyService = [
    {
      tag: "All",
    },
    {
      tag: "Active",
    },
    {
      tag: "On hold",
    },
    {
      tag: "Pending",
    },
    {
      tag: "Cancel",
    },
  ];
  const dataTagScript = [
    {
      tag: "Tất cả",
    },
    {
      tag: "Boot",
    },
    {
      tag: "PXE",
    },    
  ];
  const dataTagRewardCenter=[
    {
      tag:"Tất cả",
    },
    {
      tag:"Có sẵn",
    },
    {
      tag:"Đã dùng",
    },
    {
      tag:"Hết hạn",
    },
  ];
  return (
    <div className={`bg-dashboard flex pb-2 flex-wrap ${props.title === "notification" ? "px-4" : "px-8"} `} >
      {props.title === "ticket"
        ? dataTagTicket.map(function (item, index) {
          const changeStatus = () => setStatus(item.tag);
          return (
            <Link href="#" key={index}>
              <div className={`bg-white bg-opacity-30 p-1 px-2 mr-2 mb-2 rounded-lg text-white text-clampSx cursor-pointer                         ${item.tag === status
                ? "bg-opacity-100 text-black"
                : ""
                }`}
                onClick={changeStatus}>
                <span className="whitespace-nowrap">{item.tag}</span>
              </div>
            </Link>
          );
        })
        : props.title === "myservice"
          ? dataTagMyService.map(function (item, index) {
            const changeStatus = () => setStatus(item.tag);
            return (
              <Link href="#" key={index}>
                <div
                  className={`bg-white bg-opacity-30 p-1 px-2 mr-2 mb-2 rounded-lg text-white text-clampSx cursor-pointer
                         ${item.tag === status
                      ? "bg-opacity-100 text-black"
                      : ""
                    }`}
                  onClick={changeStatus}
                >
                  <span className="whitespace-nowrap">{item.tag}</span>
                </div>
              </Link>
            );
          })
          :props.title === "script"
          ? dataTagScript.map(function (item, index) {
            const changeStatus = () => setStatus(item.tag);
            return (
              <Link href="#" key={index}>
                <div
                  className={`bg-white bg-opacity-30 p-1 px-4 mr-2 mb-2 rounded-lg text-white text-clampSx cursor-pointer
                         ${item.tag === status
                      ? "bg-opacity-10 text-black"
                      : ""
                    }`}
                  onClick={changeStatus}
                >
                  <span className="whitespace-nowrap">{item.tag}</span>
                </div>
              </Link>
            );
          })
          :props.title === "rewardcenter"
          ? dataTagRewardCenter.map(function (item, index) {
            const changeStatus = () => setStatus(item.tag);
            return (
              <Link href="#" key={index}>
                <div
                  className={`bg-white bg-opacity-30 p-2 mr-2 mb-2 rounded-lg text-white text-clampSx cursor-pointer
                         ${item.tag === status
                      ? "bg-opacity-100 text-blue-900"
                      : ""
                    }`}
                  onClick={changeStatus}
                >
                  <span className="whitespace-nowrap">{item.tag}</span>
                </div>
              </Link>
            );
          }):
          ""}
    </div>
  );
}
