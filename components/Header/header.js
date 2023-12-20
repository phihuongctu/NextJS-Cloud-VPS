import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconNotify } from "/components/Gallery/icon";
import Notification from "/components/Notification";
import ModalConfirm from "/components/Modal/modalConfirm";
import ModalNotify from "/components/Modal/modalNotify";
import SidebarMobile from "/components/Sidebar/sidebarMobile";
function Header() {
  //modal confirm
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  //modal notify
  const [modalNotify, setModalNotify] = useState(false);
  const showModalNotify = () => {
    setModalNotify(!modalNotify);
  };
  //notify
  const [showNotify, setShowNotify] = useState(true);
  const handleNotify = (e) => {
    e.stopPropagation();
    setShowNotify(!showNotify);
  };
  //theme
  // const handleTheme = () => {
  //   if (theme === "light") {
  //     <button onClick={() => setTheme("light")}>Light Mode</button>;
  //   } else {
  //     <button onClick={() => setTheme("dark")}>Dark Mode</button>;
  //   }
  // };
  //scroll
  const [scroll, setScroll] = useState({ show: true, top: 0 });
  const handleScroll = () => {
    setScroll({
      top: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scroll.top,
    });
  };
  // listener change scroll
  useEffect(() => {
    // mounted
    window.addEventListener("scroll", handleScroll);
    // unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [barMobile, setbarMobile] = useState(true);
  const showSidebarMobile = () => setbarMobile(!barMobile);
  const dataMenuMain = [
    {
      name: "Crypto",
      icon: "/img/Category.svg",
      hasChildren: true,
      children: [
        {
          name: "Coin ranking",
          icon: "/img/ranking.svg",
        },
        {
          name: "Add recent",
          icon: "/img/new.svg",
        },
      ],
    },
    {
      name: "Service",
      icon: "/img/Send.svg",
    },
    {
      name: "Company",
      icon: "/img/Send.svg",
    },
    {
      name: "Resource",
      icon: "/img/Send.svg",
      hasChildren: true,
      children: [
        {
          name: "Coin ranking",
          icon: "/img/ranking.svg",
        },
        {
          name: "Add recent",
          icon: "/img/new.svg",
        },
      ],
    },
  ];
  return (
    <header
      className={` ${
        scroll.show & (scroll.top === 0) ? "block !bg-transparent " : ""
      } ${
        scroll.show & (scroll.top !== 0) ? "hidden" : "fixed bg-blue-900"
      } text-white m-auto flex justify-center left-0 right-0 p-2 z-20  top-0  flex-1 shadow-sm transition duration-200 ease-in-out`}
    >
      <nav className="flex items-center justify-between flex-wrap p-4 w-full max-w-5xl ">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link href="/">
            <a>
              <svg
                width="115"
                height="32"
                viewBox="0 0 115 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3967 0.5343C13.6306 -0.1781 15.1508 -0.1781 16.3847 0.5343L26.7874 6.54027C28.0213 7.25267 28.7814 8.56923 28.7814 9.99403V22.006C28.7814 23.4308 28.0213 24.7473 26.7874 25.4597L16.3847 31.4657C15.1508 32.1781 13.6306 32.1781 12.3967 31.4657L1.99404 25.4597C0.760122 24.7473 0 23.4308 0 22.006V9.99403C0 8.56923 0.760122 7.25267 1.99404 6.54027L12.3967 0.5343Z"
                  fill="url(#paint0_linear)"
                ></path>
                <path
                  d="M11.5991 25.3054L11.4896 25.2421L12.234 22.4958L6.51985 16.9611L6.49796 16.8977L8.5997 9.31386L8.64348 9.27161L16.5031 7.24362L16.5688 7.26475L22.3267 12.8206L22.3486 12.884L20.2468 20.4678L20.225 20.5101L11.5991 25.3054ZM6.65121 16.8977L12.3653 22.4113L12.3872 22.4747L11.6647 25.1153L20.1155 20.3833L22.1953 12.8629L16.5031 7.37037L8.73106 9.37724L6.65121 16.8977Z"
                  fill="white"
                ></path>
                <path
                  d="M17.2477 17.7005L10.4608 16.0105L10.439 15.9048L15.4306 11.0672L15.5401 11.0884L17.3353 17.616L17.2477 17.7005ZM10.6141 15.926L17.1602 17.5526L15.4306 11.2574L10.6141 15.926Z"
                  fill="white"
                ></path>
                <path
                  d="M12.3655 22.5169L12.256 22.4957L8.62173 9.37715L8.7093 9.29265L22.2612 12.8205L22.283 12.9261L12.3655 22.5169ZM8.77498 9.46165L12.3436 22.3479L22.1079 12.9473L8.77498 9.46165Z"
                  fill="white"
                ></path>
                <path
                  d="M10.4677 15.886L6.54461 16.858L6.57728 16.9807L10.5003 16.0088L10.4677 15.886Z"
                  fill="white"
                ></path>
                <path
                  d="M16.4467 7.29758L15.3969 11.094L15.5238 11.1267L16.5736 7.33025L16.4467 7.29758Z"
                  fill="white"
                ></path>
                <path
                  d="M17.3213 17.6482L17.229 17.7384L20.1099 20.4854L20.2023 20.3953L17.3213 17.6482Z"
                  fill="white"
                ></path>
                <path
                  d="M11.5991 25.3054L11.4896 25.2421L12.234 22.4958L6.51985 16.9611L6.49796 16.8977L8.5997 9.31386L8.64348 9.27161L16.5031 7.24362L16.5688 7.26475L22.3267 12.8206L22.3486 12.884L20.2468 20.4678L20.225 20.5101L11.5991 25.3054ZM6.65121 16.8977L12.3653 22.4113L12.3872 22.4747L11.6647 25.1153L20.1155 20.3833L22.1953 12.8629L16.5031 7.37037L8.73106 9.37724L6.65121 16.8977Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M17.2477 17.7005L10.4608 16.0105L10.439 15.9048L15.4306 11.0672L15.5401 11.0884L17.3353 17.616L17.2477 17.7005ZM10.6141 15.926L17.1602 17.5526L15.4306 11.2574L10.6141 15.926Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M12.3655 22.5169L12.256 22.4957L8.62173 9.37715L8.7093 9.29265L22.2612 12.8205L22.283 12.9261L12.3655 22.5169ZM8.77498 9.46165L12.3436 22.3479L22.1079 12.9473L8.77498 9.46165Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M10.4677 15.886L6.54461 16.858L6.57728 16.9807L10.5003 16.0088L10.4677 15.886Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M16.4467 7.29758L15.3969 11.094L15.5238 11.1267L16.5736 7.33025L16.4467 7.29758Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M17.3213 17.6482L17.229 17.7384L20.1099 20.4854L20.2023 20.3953L17.3213 17.6482Z"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M6.5856 17.4047C6.8637 17.4047 7.08915 17.1872 7.08915 16.9188C7.08915 16.6505 6.8637 16.4329 6.5856 16.4329C6.30751 16.4329 6.08206 16.6505 6.08206 16.9188C6.08206 17.1872 6.30751 17.4047 6.5856 17.4047Z"
                  fill="white"
                ></path>
                <path
                  d="M8.68727 9.86312C8.96537 9.86312 9.19081 9.64558 9.19081 9.37724C9.19081 9.1089 8.96537 8.89137 8.68727 8.89137C8.40917 8.89137 8.18373 9.1089 8.18373 9.37724C8.18373 9.64558 8.40917 9.86312 8.68727 9.86312Z"
                  fill="white"
                ></path>
                <path
                  d="M16.5252 7.81394C16.8033 7.81394 17.0287 7.59641 17.0287 7.32807C17.0287 7.05973 16.8033 6.84219 16.5252 6.84219C16.2471 6.84219 16.0216 7.05973 16.0216 7.32807C16.0216 7.59641 16.2471 7.81394 16.5252 7.81394Z"
                  fill="white"
                ></path>
                <path
                  d="M22.1954 13.3698C22.4735 13.3698 22.699 13.1523 22.699 12.884C22.699 12.6156 22.4735 12.3981 22.1954 12.3981C21.9174 12.3981 21.6919 12.6156 21.6919 12.884C21.6919 13.1523 21.9174 13.3698 22.1954 13.3698Z"
                  fill="white"
                ></path>
                <path
                  d="M20.1594 20.9326C20.4375 20.9326 20.6629 20.715 20.6629 20.4467C20.6629 20.1783 20.4375 19.9608 20.1594 19.9608C19.8813 19.9608 19.6559 20.1783 19.6559 20.4467C19.6559 20.715 19.8813 20.9326 20.1594 20.9326Z"
                  fill="white"
                ></path>
                <path
                  d="M17.2256 18.0806C17.5037 18.0806 17.7292 17.863 17.7292 17.5947C17.7292 17.3264 17.5037 17.1088 17.2256 17.1088C16.9475 17.1088 16.7221 17.3264 16.7221 17.5947C16.7221 17.863 16.9475 18.0806 17.2256 18.0806Z"
                  fill="white"
                ></path>
                <path
                  d="M12.3215 22.9183C12.5996 22.9183 12.8251 22.7008 12.8251 22.4324C12.8251 22.1641 12.5996 21.9465 12.3215 21.9465C12.0434 21.9465 11.818 22.1641 11.818 22.4324C11.818 22.7008 12.0434 22.9183 12.3215 22.9183Z"
                  fill="white"
                ></path>
                <path
                  d="M10.5483 16.4329C10.8264 16.4329 11.0518 16.2153 11.0518 15.947C11.0518 15.6787 10.8264 15.4611 10.5483 15.4611C10.2702 15.4611 10.0447 15.6787 10.0447 15.947C10.0447 16.2153 10.2702 16.4329 10.5483 16.4329Z"
                  fill="white"
                ></path>
                <path
                  d="M15.4742 11.6375C15.7523 11.6375 15.9777 11.42 15.9777 11.1517C15.9777 10.8833 15.7523 10.6658 15.4742 10.6658C15.1961 10.6658 14.9706 10.8833 14.9706 11.1517C14.9706 11.42 15.1961 11.6375 15.4742 11.6375Z"
                  fill="white"
                ></path>
                <path
                  d="M6.5856 17.4047C6.8637 17.4047 7.08915 17.1872 7.08915 16.9188C7.08915 16.6505 6.8637 16.4329 6.5856 16.4329C6.30751 16.4329 6.08206 16.6505 6.08206 16.9188C6.08206 17.1872 6.30751 17.4047 6.5856 17.4047Z"
                  stroke="white"
                ></path>
                <path
                  d="M8.68727 9.86312C8.96537 9.86312 9.19081 9.64558 9.19081 9.37724C9.19081 9.1089 8.96537 8.89137 8.68727 8.89137C8.40917 8.89137 8.18373 9.1089 8.18373 9.37724C8.18373 9.64558 8.40917 9.86312 8.68727 9.86312Z"
                  stroke="white"
                ></path>
                <path
                  d="M16.5252 7.81394C16.8033 7.81394 17.0287 7.59641 17.0287 7.32807C17.0287 7.05973 16.8033 6.84219 16.5252 6.84219C16.2471 6.84219 16.0216 7.05973 16.0216 7.32807C16.0216 7.59641 16.2471 7.81394 16.5252 7.81394Z"
                  stroke="white"
                ></path>
                <path
                  d="M22.1954 13.3698C22.4735 13.3698 22.699 13.1523 22.699 12.884C22.699 12.6156 22.4735 12.3981 22.1954 12.3981C21.9174 12.3981 21.6919 12.6156 21.6919 12.884C21.6919 13.1523 21.9174 13.3698 22.1954 13.3698Z"
                  stroke="white"
                ></path>
                <path
                  d="M20.1594 20.9326C20.4375 20.9326 20.6629 20.715 20.6629 20.4467C20.6629 20.1783 20.4375 19.9608 20.1594 19.9608C19.8813 19.9608 19.6559 20.1783 19.6559 20.4467C19.6559 20.715 19.8813 20.9326 20.1594 20.9326Z"
                  stroke="white"
                ></path>
                <path
                  d="M17.2256 18.0806C17.5037 18.0806 17.7292 17.863 17.7292 17.5947C17.7292 17.3264 17.5037 17.1088 17.2256 17.1088C16.9475 17.1088 16.7221 17.3264 16.7221 17.5947C16.7221 17.863 16.9475 18.0806 17.2256 18.0806Z"
                  stroke="white"
                ></path>
                <path
                  d="M12.3215 22.9183C12.5996 22.9183 12.8251 22.7008 12.8251 22.4324C12.8251 22.1641 12.5996 21.9465 12.3215 21.9465C12.0434 21.9465 11.818 22.1641 11.818 22.4324C11.818 22.7008 12.0434 22.9183 12.3215 22.9183Z"
                  stroke="white"
                ></path>
                <path
                  d="M10.5483 16.4329C10.8264 16.4329 11.0518 16.2153 11.0518 15.947C11.0518 15.6787 10.8264 15.4611 10.5483 15.4611C10.2702 15.4611 10.0447 15.6787 10.0447 15.947C10.0447 16.2153 10.2702 16.4329 10.5483 16.4329Z"
                  stroke="white"
                ></path>
                <path
                  d="M15.4742 11.6375C15.7523 11.6375 15.9777 11.42 15.9777 11.1517C15.9777 10.8833 15.7523 10.6658 15.4742 10.6658C15.1961 10.6658 14.9706 10.8833 14.9706 11.1517C14.9706 11.42 15.1961 11.6375 15.4742 11.6375Z"
                  stroke="white"
                ></path>
                <path
                  d="M43.3594 9.224H37.0934V6.988H52.3294V9.224H46.0634V25.5H43.3594V9.224ZM63.7233 19H54.3633C54.45 22.068 55.8453 23.602 58.5493 23.602C60.0573 23.602 61.4353 23.108 62.6833 22.12L63.4893 23.992C62.9 24.512 62.146 24.928 61.2273 25.24C60.326 25.5347 59.416 25.682 58.4973 25.682C56.4 25.682 54.7533 25.084 53.5573 23.888C52.3613 22.6747 51.7633 21.0193 51.7633 18.922C51.7633 17.5873 52.0233 16.4 52.5433 15.36C53.0806 14.32 53.826 13.514 54.7793 12.942C55.7326 12.37 56.816 12.084 58.0293 12.084C59.7973 12.084 61.184 12.656 62.1893 13.8C63.212 14.944 63.7233 16.53 63.7233 18.558V19ZM58.0813 14.034C57.0933 14.034 56.2873 14.3287 55.6633 14.918C55.0393 15.5073 54.6406 16.348 54.4673 17.44H61.4093C61.3053 16.3307 60.9673 15.49 60.3953 14.918C59.8233 14.3287 59.052 14.034 58.0813 14.034ZM75.6027 25.5L69.3367 19.312V25.5H66.7367V6.364H69.3367V18.324L75.1607 12.422H78.4107L72.1447 18.714L78.9567 25.5H75.6027ZM87.5172 12.084C90.6545 12.084 92.2232 13.8347 92.2232 17.336V25.5H89.5972V17.492C89.5972 16.348 89.3718 15.516 88.9212 14.996C88.4878 14.476 87.7858 14.216 86.8152 14.216C85.7058 14.216 84.8132 14.5627 84.1372 15.256C83.4785 15.9493 83.1492 16.8767 83.1492 18.038V25.5H80.5492V16.088C80.5492 14.7187 80.4798 13.488 80.3412 12.396H82.7852L83.0192 14.658C83.4352 13.826 84.0332 13.1933 84.8132 12.76C85.6105 12.3093 86.5118 12.084 87.5172 12.084ZM95.9613 12.396H98.5613V25.5H95.9613V12.396ZM98.7693 6.676V9.432H95.7273V6.676H98.7693ZM114.5 25.5H111.38L107.506 20.664L103.684 25.5H100.538L105.998 18.766L100.85 12.396H103.996L107.506 16.868L111.042 12.396H114.214L109.066 18.766L114.5 25.5Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="14.3907"
                    y1="32"
                    x2="14.3907"
                    y2="-3.71429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5558FF"></stop>
                    <stop offset="0.991398" stopColor="#00C0FF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </Link>
        </div>
        <div
          onClick={showSidebarMobile}
          className=" cursor-pointer flex lg:hidden"
        >
          <Image
            src="/img/toggle.svg"
            width="24"
            height="24"
            className="filter invert"
          />
        </div>
        <div className="w-full  hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm flex items-center lg:flex-grow">
            {dataMenuMain.map(function (items, index) {
              return (
                <a
                  href="#responsive-header"
                  className=" group flex item-center relative items-center mt-4 ml-5  lg:mt-0 text-teal-lighter text-sm font-semibold hover:text-blue-600"
                  key={index}
                >
                  <span>{items.name}</span>
                  {items.hasChildren && (
                    <i
                      className="
                        text-gray-500 ml-1 group-hover:text-blue-600"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.96029 11.087C7.92163 11.0494 7.75629 10.9071 7.62029 10.7746C6.76496 9.99789 5.36496 7.97159 4.93763 6.91102C4.86896 6.74996 4.72363 6.34275 4.71429 6.12518C4.71429 5.91671 4.76229 5.71797 4.85963 5.52833C4.99563 5.29193 5.20963 5.10229 5.46229 4.99838C5.63763 4.93148 6.16229 4.82757 6.17163 4.82757C6.74563 4.72366 7.67829 4.6665 8.70896 4.6665C9.69096 4.6665 10.5856 4.72366 11.1683 4.80873C11.1776 4.81848 11.8296 4.92239 12.053 5.03604C12.461 5.24452 12.7143 5.65173 12.7143 6.08751V6.12518C12.7043 6.40899 12.451 7.00584 12.4416 7.00584C12.0136 8.00925 10.6823 9.9888 9.79763 10.7844C9.79763 10.7844 9.57029 11.0084 9.42829 11.1059C9.22429 11.2578 8.97163 11.3332 8.71896 11.3332C8.43696 11.3332 8.17429 11.2481 7.96029 11.087Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                  )}
                  {items.hasChildren && (
                    <ul
                      className={
                        " group-hover:block px-4 transition duration-300 ease-in-out hidden absolute top-5 p-4 bg-white z-10 shadow-md h-auto w-60 rounded-lg "
                      }
                    >
                      {items.children.map(function (child, index) {
                        return (
                          <li key={index} className="">
                            <a className=" p-3.5 group hover:bg-blue-100 rounded-lg flex items-center mt-2 justify-start text-gray-600 cursor-pointer text-sm font-semibold ">
                              <Image
                                src={child.icon}
                                width="24"
                                height="24"
                                alt="Picture of the author"
                                className=""
                              />
                              <span className=" ml-2">{child.name}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </a>
              );
            })}
          </div>
          <section>
            <div
              onClick={showModal}
              className=" ml-4  flex items-center justify-center text-white text-sm font-semibold cursor-pointer"
            >
              Confirm
            </div>
            <ModalConfirm modal={modal} setModal={setModal} />
          </section>
          <section>
            <div
              onClick={showModalNotify}
              className=" ml-4 flex items-center justify-center text-white  text-sm font-semibold  cursor-pointer"
            >
              Notify
            </div>
            <ModalNotify
              modalNotify={modalNotify}
              setModalNotify={setModalNotify}
            />
          </section>
        </div>
        <div className=" hidden profile lg:flex items-center ">
          <Link href="/login">
            <a className="  ml-5 py-2  flex items-center justify-center text-white rounded-lg w-width-btn  hover:border-transparent hover:text-teal mt-4 lg:mt-0">
              Log in
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="  ml-5  py-2  flex items-center justify-center text-white rounded-lg w-width-btn  hover:border-transparent hover:text-teal mt-4 lg:mt-0">
              Dashboard
            </a>
          </Link>
          <button className="ml-5 relative" onClick={handleNotify}>
            <IconNotify />
            <Notification
              showNotify={showNotify}
              setShowNotify={setShowNotify}
            />
          </button>
        </div>
      </nav>
      <SidebarMobile barMobile={barMobile} setbarMobile={setbarMobile} />
    </header>
  );
}
export default Header;
