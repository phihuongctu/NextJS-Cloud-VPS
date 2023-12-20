import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { dataSideBar } from "./sidebarData";
import { IconMinus, IconPlus } from "/components/Gallery/icon";
export default function SidebarMobile({ barMobile, setbarMobile }) {
  const closebarMobile = () => setbarMobile(!barMobile);
  useEffect(() => {
    if (barMobile) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [barMobile]);
  //dropdown
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = (index) => {
    setDropdown({ ...dropdown, [index]: !dropdown[index] });
  };
  return (
    <aside
      id="sidebar"
      className={`${
        barMobile ? " hidden " : " "
      }    h-full w-full fixed flex flex-col top-0 left-0 right-0 z-20 bg-white  lg:hidden `}
    >
      <div className="bg-white sticky top-0 z-1">
        <div
          className="border-b border-gray-200
         menu-header-top p-4 flex justify-between items-center"
        >
          <a className="flex">
            <div className="flex items-center mr-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#F1F1F1"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.294 15.2911C25.294 18.2281 22.9391 20.5831 20 20.5831C17.0619 20.5831 14.706 18.2281 14.706 15.2911C14.706 12.354 17.0619 10 20 10C22.9391 10 25.294 12.354 25.294 15.2911ZM20 30C15.6624 30 12 29.295 12 26.575C12 23.8539 15.6854 23.1739 20 23.1739C24.3386 23.1739 28 23.8789 28 26.599C28 29.32 24.3146 30 20 30Z"
                  fill="#666666"
                  fillOpacity="0.6"
                ></path>
              </svg>
            </div>
            <span className=" meta-user">
              <span className="name flex items-center font-semibold text-base ">
                <span className="mr-1 text-black text-opacity-80">root</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.75 12.25V15L12.5 15.75V13H15.25L14.5 12.25H11.75Z"
                    fill="#FF636E"
                  ></path>
                  <path
                    d="M0.75 13H3.5V15.75L4.25 15V12.25H1.5L0.75 13Z"
                    fill="#FF636E"
                  ></path>
                  <path
                    d="M2 12.75L1.75 13H0.75L1.5 12.25H4.25V12.75H2Z"
                    fill="#FF475A"
                  ></path>
                  <path
                    d="M4 13.5V15.25L3.5 15.75V13C3.63261 13 3.75979 13.0527 3.85355 13.1464C3.94732 13.2402 4 13.3674 4 13.5Z"
                    fill="#FF475A"
                  ></path>
                  <path
                    d="M14 12.75L14.25 13H15.25L14.5 12.25H11.75V12.75H14Z"
                    fill="#FF475A"
                  ></path>
                  <path
                    d="M12 13.5V15.25L12.5 15.75V13C12.3674 13 12.2402 13.0527 12.1464 13.1464C12.0527 13.2402 12 13.3674 12 13.5Z"
                    fill="#FF475A"
                  ></path>
                  <path
                    d="M10.0825 11.89C9.77 12.0025 9.2925 11.54 8.9575 11.5975C8.81468 11.6422 8.68734 11.7263 8.59 11.84L11.75 15V12.25H14.5L12.1425 9.89246C12.045 10.1925 12.1275 10.6675 11.9125 10.8475C11.655 11.06 11.0475 10.785 10.755 10.9525C10.4625 11.12 10.4025 11.775 10.0825 11.89Z"
                    fill="#FF9696"
                  ></path>
                  <path
                    d="M7.04266 11.5975C6.70766 11.54 6.23016 12.0025 5.91766 11.89C5.59766 11.775 5.53516 11.1175 5.24516 10.9525C4.95516 10.7875 4.34516 11.06 4.08766 10.845C3.87016 10.6675 3.95266 10.1925 3.85766 9.89246L1.50016 12.25H4.25016V15L7.41016 11.84C7.31282 11.7263 7.18547 11.6422 7.04266 11.5975Z"
                    fill="#FF9696"
                  ></path>
                  <path
                    d="M8 2.75C7.30777 2.75 6.63108 2.95527 6.0555 3.33986C5.47993 3.72444 5.03133 4.27107 4.76642 4.91061C4.50151 5.55015 4.4322 6.25388 4.56725 6.93282C4.7023 7.61175 5.03564 8.23539 5.52513 8.72487C6.01461 9.21436 6.63825 9.5477 7.31718 9.68275C7.99612 9.8178 8.69985 9.74849 9.33939 9.48358C9.97893 9.21867 10.5256 8.77007 10.9101 8.1945C11.2947 7.61892 11.5 6.94223 11.5 6.25C11.5 5.32174 11.1313 4.4315 10.4749 3.77513C9.8185 3.11875 8.92826 2.75 8 2.75ZM6.5 6.25L5.75 5H7.25L8 3.5L8.75 5H10.25L9.5 6.25L10.25 7.5H8.75L8 9L7.25 7.5H5.75L6.5 6.25Z"
                    fill="#FFDFB0"
                  ></path>
                  <path
                    d="M8 1.75C7.10998 1.75 6.23996 2.01392 5.49993 2.50839C4.75991 3.00285 4.18314 3.70566 3.84254 4.52792C3.50195 5.35019 3.41283 6.25499 3.58647 7.12791C3.7601 8.00082 4.18868 8.80264 4.81802 9.43198C5.44736 10.0613 6.24918 10.4899 7.12209 10.6635C7.99501 10.8372 8.89981 10.7481 9.72208 10.4075C10.5443 10.0669 11.2471 9.49009 11.7416 8.75007C12.2361 8.01004 12.5 7.14002 12.5 6.25C12.5 5.05653 12.0259 3.91193 11.182 3.06802C10.3381 2.22411 9.19347 1.75 8 1.75ZM4.5 6.25C4.5 5.55777 4.70527 4.88108 5.08986 4.3055C5.47444 3.72993 6.02107 3.28133 6.66061 3.01642C7.30015 2.75151 8.00388 2.6822 8.68282 2.81725C9.36175 2.9523 9.98539 3.28564 10.4749 3.77513C10.9644 4.26461 11.2977 4.88825 11.4327 5.56718C11.5678 6.24612 11.4985 6.94985 11.2336 7.58939C10.9687 8.22893 10.5201 8.77556 9.9445 9.16014C9.36892 9.54473 8.69223 9.75 8 9.75C7.07174 9.75 6.1815 9.38125 5.52513 8.72487C4.86875 8.0685 4.5 7.17826 4.5 6.25Z"
                    fill="#FFECCF"
                  ></path>
                  <path
                    d="M12.1428 9.8925C12.1578 9.83687 12.1842 9.78496 12.2203 9.74C12.4353 9.485 13.1028 9.54 13.2728 9.25C13.4403 8.965 13.0603 8.4225 13.1778 8.1075C13.2903 7.7975 13.9378 7.6225 13.9953 7.2925C14.0528 6.97 13.5078 6.5875 13.5078 6.25C13.5078 5.9125 14.0528 5.53 13.9953 5.2075C13.9378 4.8775 13.2903 4.7025 13.1778 4.3925C13.0603 4.0775 13.4403 3.535 13.2728 3.25C13.1028 2.96 12.4353 3.015 12.2203 2.76C12.0053 2.505 12.1728 1.8675 11.9128 1.655C11.6528 1.4425 11.0478 1.715 10.7553 1.5475C10.4628 1.38 10.4028 0.725 10.0828 0.61C9.77026 0.4975 9.29276 0.96 8.95776 0.9025C8.63026 0.8475 8.34276 0.25 8.00026 0.25C7.65776 0.25 7.37026 0.8475 7.04276 0.9025C6.70776 0.96 6.23026 0.4975 5.91776 0.61C5.59776 0.725 5.53776 1.3825 5.24526 1.5475C4.95276 1.7125 4.34526 1.44 4.08776 1.6525C3.83026 1.865 3.99776 2.505 3.78026 2.76C3.56276 3.015 2.89776 2.96 2.72776 3.25C2.56026 3.535 2.94026 4.0775 2.82276 4.3925C2.71026 4.7025 2.06276 4.8775 2.00526 5.2075C1.94776 5.53 2.49276 5.9125 2.49276 6.25C2.49276 6.5875 1.94776 6.97 2.00526 7.2925C2.06276 7.6225 2.71026 7.7975 2.82276 8.1075C2.94026 8.4225 2.56026 8.965 2.72776 9.25C2.89776 9.54 3.56526 9.485 3.78026 9.74C3.81632 9.78496 3.8427 9.83687 3.85776 9.8925C3.95276 10.1925 3.87026 10.6675 4.08776 10.845C4.34526 11.06 4.95276 10.785 5.24526 10.9525C5.53776 11.12 5.59776 11.775 5.91776 11.89C6.23026 12.0025 6.70776 11.54 7.04276 11.5975C7.18558 11.6423 7.31293 11.7263 7.41026 11.84C7.60276 12.025 7.79026 12.25 8.00026 12.25C8.21026 12.25 8.39776 12.025 8.59026 11.84C8.6876 11.7263 8.81495 11.6423 8.95776 11.5975C9.29276 11.54 9.77026 12.0025 10.0828 11.89C10.4028 11.775 10.4628 11.1175 10.7553 10.9525C11.0478 10.7875 11.6553 11.06 11.9128 10.8475C12.1278 10.6675 12.0453 10.1925 12.1428 9.8925ZM3.50026 6.25C3.50026 5.35998 3.76418 4.48995 4.25865 3.74993C4.75312 3.00991 5.45592 2.43314 6.27819 2.09254C7.10045 1.75195 8.00525 1.66283 8.87817 1.83647C9.75108 2.0101 10.5529 2.43868 11.1822 3.06802C11.8116 3.69736 12.2402 4.49918 12.4138 5.37209C12.5874 6.24501 12.4983 7.14981 12.1577 7.97208C11.8171 8.79434 11.2403 9.49715 10.5003 9.99161C9.76031 10.4861 8.89028 10.75 8.00026 10.75C6.80679 10.75 5.6622 10.2759 4.81828 9.43198C3.97437 8.58807 3.50026 7.44347 3.50026 6.25Z"
                    fill="#FFAC5A"
                  ></path>
                  <path
                    d="M13.0735 11.8235C12.9162 11.6762 12.7078 11.5959 12.4924 11.5993C12.2769 11.6028 12.0713 11.6898 11.9187 11.842L11.9125 11.8475C11.655 12.06 11.0475 11.785 10.755 11.9525C10.4625 12.12 10.4025 12.775 10.0825 12.89C9.87868 12.9156 9.67247 12.8666 9.502 12.752L8.59 11.84C8.68734 11.7263 8.81468 11.6422 8.9575 11.5975C9.2925 11.54 9.77 12.0025 10.0825 11.89C10.4025 11.775 10.4625 11.1175 10.755 10.9525C11.0475 10.7875 11.655 11.06 11.9125 10.8475C12.1275 10.6675 12.045 10.1925 12.1425 9.89246L14.5 12.25H13.5L13.0735 11.8235Z"
                    fill="#FF7D81"
                  ></path>
                  <path
                    d="M5.91766 12.89C5.59766 12.775 5.53516 12.1175 5.24516 11.9525C4.95516 11.7875 4.34516 12.06 4.08766 11.845C4.08341 11.8415 4.07941 11.8382 4.07566 11.8345C3.92364 11.6832 3.71854 11.5973 3.5041 11.595C3.28965 11.5928 3.08281 11.6744 2.92766 11.8225L2.50016 12.25H1.50016L3.85766 9.89246C3.95266 10.1925 3.87016 10.6675 4.08766 10.845C4.34516 11.06 4.95266 10.785 5.24516 10.9525C5.53766 11.12 5.59766 11.775 5.91766 11.89C6.23016 12.0025 6.70766 11.54 7.04266 11.5975C7.18547 11.6422 7.31282 11.7263 7.41016 11.84L6.49816 12.752C6.32769 12.8666 6.12147 12.9156 5.91766 12.89Z"
                    fill="#FF7D81"
                  ></path>
                  <path
                    d="M10.2502 5.25001C10.2506 4.58806 10.1313 3.93149 9.89796 3.31201C10.5328 3.72151 11.0181 4.32552 11.2811 5.03372C11.5441 5.74192 11.5709 6.51624 11.3573 7.24088C11.1436 7.96552 10.7012 8.60154 10.0961 9.05383C9.49096 9.50611 8.75568 9.75035 8.00022 9.75002C7.97197 9.75002 7.94472 9.74652 7.91672 9.74577C8.63795 9.23871 9.22652 8.56548 9.63268 7.78296C10.0388 7.00045 10.2507 6.13166 10.2502 5.25001Z"
                    fill="#FFCF94"
                  ></path>
                  <path
                    d="M12.5 6.24998C12.5016 6.97339 12.3283 7.68647 11.9949 8.3285C11.6616 8.97053 11.178 9.5225 10.5854 9.9374C9.9928 10.3523 9.30871 10.6179 8.59138 10.7115C7.87405 10.8051 7.14472 10.7239 6.46549 10.475C6.98236 10.3049 7.47105 10.0589 7.91549 9.74498C7.94349 9.74498 7.97074 9.74923 7.99899 9.74923C8.75446 9.74956 9.48973 9.50532 10.0949 9.05304C10.7 8.60076 11.1424 7.96474 11.356 7.24009C11.5696 6.51545 11.5429 5.74113 11.2799 5.03294C11.0168 4.32474 10.5316 3.72073 9.89674 3.31123C9.7043 2.80126 9.43704 2.32277 9.10374 1.89148C10.074 2.13665 10.9348 2.69839 11.55 3.4878C12.1651 4.27721 12.4994 5.24921 12.5 6.24998Z"
                    fill="#FFDFB0"
                  ></path>
                  <path
                    d="M6.46576 10.475C7.03895 10.6851 7.64892 10.7762 8.25848 10.7429C8.86805 10.7096 9.46444 10.5525 10.0113 10.2811C10.5582 10.0098 11.044 9.62993 11.4393 9.1647C11.8346 8.69946 12.131 8.15861 12.3104 7.5751C12.4898 6.99159 12.5486 6.37765 12.483 5.7707C12.4174 5.16376 12.2289 4.57653 11.929 4.0448C11.6291 3.51308 11.224 3.048 10.7385 2.67793C10.253 2.30785 9.69721 2.04053 9.10501 1.89225C8.67953 1.34075 8.15363 0.874654 7.55501 0.5185C7.66503 0.37692 7.8237 0.281236 8.00026 0.25C8.34276 0.25 8.63026 0.8475 8.95776 0.9025C9.29276 0.96 9.77026 0.4975 10.0828 0.61C10.4028 0.725 10.4653 1.3825 10.7553 1.5475C11.0453 1.7125 11.6553 1.44 11.9128 1.655C12.1703 1.87 12.0028 2.505 12.2203 2.76C12.4378 3.015 13.1028 2.96 13.2728 3.25C13.4403 3.535 13.0603 4.0775 13.1778 4.3925C13.2903 4.7025 13.9378 4.8775 13.9953 5.2075C14.0528 5.53 13.5078 5.9125 13.5078 6.25C13.5078 6.5875 14.0528 6.97 13.9953 7.2925C13.9378 7.6225 13.2903 7.7975 13.1778 8.1075C13.0603 8.4225 13.4403 8.965 13.2728 9.25C13.1028 9.54 12.4353 9.485 12.2203 9.74C12.1842 9.78496 12.1578 9.83687 12.1428 9.8925C12.0453 10.1925 12.1278 10.6675 11.9128 10.8475C11.6553 11.06 11.0478 10.785 10.7553 10.9525C10.4628 11.12 10.4028 11.775 10.0828 11.89C9.77026 12.0025 9.29276 11.54 8.95776 11.5975C8.81494 11.6423 8.6876 11.7263 8.59026 11.84C8.39776 12.025 8.21026 12.25 8.00026 12.25C7.79026 12.25 7.60276 12.025 7.41026 11.84C7.31293 11.7263 7.18558 11.6423 7.04276 11.5975C6.70776 11.54 6.23026 12.0025 5.91776 11.89C5.59776 11.775 5.53526 11.1175 5.24526 10.9525C4.95526 10.7875 4.34526 11.06 4.08776 10.845C4.04206 10.8045 4.00761 10.7528 3.98776 10.695C4.24036 10.7308 4.49513 10.7492 4.75026 10.75C5.33306 10.7498 5.91212 10.657 6.46576 10.475Z"
                    fill="#FC9942"
                  ></path>
                  <path
                    d="M5.75 5L6.5 6.25L5.75 7.5H7.25L8 9L8.75 7.5H10.25L9.5 6.25L10.25 5H8.75L8 3.5L7.25 5H5.75Z"
                    fill="#FC9942"
                  ></path>
                  <path
                    d="M8.75 5H10.25L9.5 6.25L10.25 7.5H8.75L8 9V3.5L8.75 5Z"
                    fill="#FF873C"
                  ></path>
                  <path
                    d="M7.25 5.5H8.75C8.88807 5.5 9 5.61193 9 5.75C9 5.88807 8.88807 6 8.75 6H7.25C7.11193 6 7 5.88807 7 5.75C7 5.61193 7.11193 5.5 7.25 5.5Z"
                    fill="#FFDFB0"
                  ></path>
                  <path
                    d="M7.25 6.5H8.75C8.88807 6.5 9 6.61193 9 6.75C9 6.88807 8.88807 7 8.75 7H7.25C7.11193 7 7 6.88807 7 6.75C7 6.61193 7.11193 6.5 7.25 6.5Z"
                    fill="#FFDFB0"
                  ></path>
                </svg>
              </span>
              <p className="email text-sm text-black text-opacity-60">
                123giaiphap@gmail.com
              </p>
            </span>
          </a>
          <div onClick={closebarMobile} className="nav-icon cursor-pointer">
            <Image
              src="/img/toggle.svg"
              width="24"
              height="24"
              alt="toggle sidebar"
            />
          </div>
        </div>
        <div className="px-4 pt-4 pb-2 relative flex w-full flex-wrap items-center">
          <span className="w-8 pl-3 py-3 z-10 leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent text-base items-center justify-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.38">
                <ellipse
                  cx="9.99047"
                  cy="9.15709"
                  rx="7.49047"
                  ry="7.49047"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></ellipse>
                <path
                  d="M15.2002 14.7559L18.1369 17.6849"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-4 placeholder-blueGray-300 text-gray-600 relative bg-gray-100 outline-none rounded-lg text-sm border-transparent focus:ring-1 focus:ring-blue-600 focus-visible: w-full pl-10"
          />
        </div>
      </div>
      <ul
        id="slide-menu"
        className=" overflow-y-auto px-4 menu slide-menu flex-1"
      >
        {dataSideBar.map(function (items, index) {
          return (
            <>
              <li key={index}>
                {typeof items.path !== "undefined" ? (
                  <Link href={items.path} scroll={false}>
                    <a
                      onClick={(e) => showDropdown(index)}
                      className="p-3.5 group hover:bg-blue-100 rounded-lg flex items-center mt-2 justify-start text-gray-600 cursor-pointer font-semibold text-sm"
                    >
                      <Image
                        src={items.icon}
                        width="24"
                        height="24"
                        className="filter grayscale group-hover:grayscale-0"
                        alt="icon sidebar"
                      />
                      <span className="group-hover:text-blue-600 ml-2 flex-1">
                        {items.name}
                      </span>
                      {items.children && (
                        <i
                          className={` ${
                            barMobile ? "hidden" : ""
                          } text-gray-500 group-hover:text-blue-600`}
                        >
                          {!dropdown[index] ? <IconPlus /> : <IconMinus />}
                        </i>
                      )}
                    </a>
                  </Link>
                ) : (
                  <a
                    onClick={(e) => showDropdown(index)}
                    className="p-3.5 group hover:bg-blue-100 rounded-lg flex items-center mt-2 justify-start text-gray-600 cursor-pointer font-semibold text-sm"
                  >
                    <Image
                      src={items.icon}
                      width="24"
                      height="24"
                      className="filter grayscale group-hover:grayscale-0"
                      alt="icon sidebar"
                    />
                    <span className="group-hover:text-blue-600 ml-2 flex-1">
                      {items.name}
                    </span>
                    {items.children && (
                      <i
                        className={` ${
                          barMobile ? "hidden" : ""
                        } text-gray-500 group-hover:text-blue-600`}
                      >
                        {!dropdown[index] ? <IconPlus /> : <IconMinus />}
                      </i>
                    )}
                  </a>
                )}
              </li>
              {/* check ton tai children menu */}
              {items.children && (
                <ul
                  className={
                    !dropdown[index]
                      ? " px-4 transition duration-300 ease-in-out hidden"
                      : " px-4 transition duration-300 ease-in-out show"
                  }
                >
                  {items.children.map(function (child, index) {
                    return (
                      <li key={index}>
                        {typeof child.path !== "undefined" ? (
                          <Link href={child.path}>
                            <a className=" p-3.5 group hover:bg-blue-100 rounded-lg flex items-center mt-2 justify-start text-gray-600 cursor-pointer text-sm font-semibold ">
                              <Image
                                src={child.icon}
                                width="24"
                                height="24"
                                alt="Picture of the author"
                                className=""
                              />
                              <span className="group-hover:text-blue-600 ml-2">
                                {child.name}
                              </span>
                            </a>
                          </Link>
                        ) : (
                          <a className=" p-3.5 group hover:bg-blue-100 rounded-lg flex items-center mt-2 justify-start text-gray-600 cursor-pointer text-sm font-semibold ">
                            <Image
                              src={child.icon}
                              width="24"
                              height="24"
                              alt="Picture of the author"
                              className=""
                            />
                            <span className="group-hover:text-blue-600 ml-2">
                              {child.name}
                            </span>
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          );
        })}
      </ul>

      <div className="log-out sticky bottom-0  py-4 w-full ">
        {/* <Theme /> */}
        <a className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-4 my-0 mx-auto btn-absolute flex items-center justify-center text-white rounded-lg w-width-btn">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0134 6.1579V5.3804C13.0134 3.68457 11.6384 2.30957 9.94256 2.30957H5.88006C4.18506 2.30957 2.81006 3.68457 2.81006 5.3804V14.6554C2.81006 16.3512 4.18506 17.7262 5.88006 17.7262H9.95089C11.6417 17.7262 13.0134 16.3554 13.0134 14.6646V13.8787"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6745 10.0177H8.64038"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2344 7.58862L18.6744 10.0178L16.2344 12.4478"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2">Log Out</span>
        </a>
      </div>
    </aside>
  );
}
