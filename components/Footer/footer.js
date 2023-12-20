import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const logo = "/img/Logo.svg";
const plus = "/img/Plus.svg";
const minus = "/img/Minus.svg";

const dataSocial = [
  {
    link: "fb.com",
    src: "/img/Facebook.svg",
    alt: "Facebook",
  },
  {
    link: "fb.com",
    src: "/img/Instagram.svg",
    alt: "Instagram",
  },
  {
    link: "fb.com",
    src: "/img/Twitter.svg",
    alt: "Twitter",
  },
  {
    link: "fb.com",
    src: "/img/Twitter.svg",
    alt: "Twitter",
  },
  {
    link: "fb.com",
    src: "/img/Twitter.svg",
    alt: "Twitter",
  },
  {
    link: "fb.com",
    src: "/img/Twitter.svg",
    alt: "Twitter",
  },
  {
    link: "fb.com",
    src: "/img/Twitter.svg",
    alt: "Twitter",
  },
];
const dataHome = [
  {
    title: "TekNix",
    hasChildren: true,
    children: [
      {
        name: "Service",
        hasChildrenSub: true,
        childrenSub: [
          {
            name: "Cloud Computer",
          },
          {
            name: "High Computer",
          },
          {
            name: "Bare Metal",
          },
        ],
      },
      {
        name: "Payment & Billing",
      },
    ],
  },
];
const dataService = [
  {
    title: "Service",
    hasChildren: true,
    children: [
      {
        name: "Cloud Computer",
      },
      {
        name: "High Computer",
      },
      {
        name: "Bare Metal",
      },
    ],
  },
];
const dataCompany = [
  {
    title: "Company",
    hasChildren: true,
    children: [
      {
        name: "Abouts",
      },
      {
        name: "Our team",
      },
      {
        name: "Careers",
      },
      {
        name: "News",
      },
      {
        name: "Contact",
      },
    ],
  },
];

export default function Footer() {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = (index) => {
    setDropdown({ ...dropdown, [index]: !dropdown[index] });
  };
  return (
    <footer id="footer" className="relative bg-primary w-full pb-24 lg:p-0">
      <div className="relative m-auto xl:container">
        <div className="relative w-full pt-8 px-8 flex flex-row justify-between items-start flex-wrap lg:justify-start lg:px-0">
          <div className="relative w-full px-0 pt-5 pb-10 lg:max-w-4/12 lg:px-5 lg:py-0">
            <div className="flex flex-col items-center text-center  relative max-w-md m-auto lg:items-start lg:text-left">
              <span className="w-auto h-12 mb-6">
                <Image
                  src={logo}
                  className="relative"
                  alt="Logo Site"
                  width={48}
                  height={48}
                />
              </span>
              <span className="text-white font-normal text-clampBase mb-6 opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </span>{" "}
              <ul className="flex flex-row justify-around items-center flex-nowrap w-full lg:justify-start lg:flex-wrap">
                {dataSocial.map(function (items, index) {
                  return (
                    <>
                      <li
                        className="w-5 h-5 flex items-center lg:w-9 lg:h-9"
                        key={index}
                      >
                        <Link href="">
                          <a className="w-5 h-5 block">
                            <Image src={items.src} width="20" height="20" />
                          </a>
                        </Link>
                      </li>
                    </>
                  );
                })}{" "}
              </ul>
            </div>
          </div>
          <div className="relative flex flex-col w-50/2 py-5 lg:max-w-calc-8/12 lg:px-5">
            {" "}
            <ul className="menu relative">
              {" "}
              {dataHome.map(function (items, index) {
                return (
                  <>
                    <li
                      className="text-white text-clampBase uppercase font-semibold"
                      key={index}
                    >
                      {items.title}
                      {/* Check exits children menu */}
                      {items.hasChildren && (
                        <ul className="children mt-3">
                          {items.children.map(function (child, index) {
                            return (
                              <>
                                <li
                                  className="item relative flex flex-row justify-between items-center flex-wrap opacity-80 hover:opacity-100"
                                  key={index}
                                >
                                  {" "}
                                  <Link href="#">
                                    <a className="w-full text-white font-normal text-clampBase pt-2 pb-2 normal-case opacity-80 hover:opacity-100">
                                      {child.name}
                                    </a>
                                  </Link>
                                  {child.childrenSub && (
                                    <button
                                      className="toogle w-full h-10 flex flex-row justify-end items-center filter brightness-0 invert transition-all absolute top-0 right-0 z-1"
                                      onClick={(e) => showDropdown(index)}
                                    >
                                      <Image
                                        src={!dropdown[index] ? plus : minus}
                                        width={16}
                                        height={16}
                                      />
                                    </button>
                                  )}
                                  {/* Check exits children menu */}
                                  {child.hasChildrenSub && (
                                    <ul
                                      className={`sub w-full pt-1 pb-1 pl-4 transition-all ${
                                        !dropdown[index] ? "hidden" : ""
                                      }`}
                                    >
                                      {child.childrenSub.map(function (
                                        childrenSub,
                                        index
                                      ) {
                                        return (
                                          <>
                                            <li
                                              className="item opacity-80 hover:opacity-100"
                                              key={index}
                                            >
                                              <Link href="#">
                                                <a className="flex w-full text-white font-normal text-clampBase pt-1 pb-1 normal-case">
                                                  {childrenSub.name}
                                                </a>
                                              </Link>
                                            </li>
                                          </>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      )}
                    </li>{" "}
                  </>
                );
              })}
            </ul>
          </div>
          <div className="relative flex flex-col w-50/2 py-5 lg:max-w-calc-8/12 lg:px-5">
            <ul className="menu">
              {dataService.map(function (items, index) {
                return (
                  <>
                    <li
                      className="text-white text-clampBase uppercase font-semibold"
                      key={index}
                    >
                      {items.title}
                      <ul className="children mt-3">
                        {items.children.map(function (child, index) {
                          return (
                            <>
                              <li
                                className="item opacity-80 hover:opacity-100"
                                key={index}
                              >
                                {" "}
                                <Link href="#">
                                  <a className="flex w-full text-white font-normal text-clampBase pt-2 pb-2 normal-case">
                                    {child.name}
                                  </a>
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="relative flex flex-col w-50/2 py-5 lg:max-w-calc-8/12 lg:px-5">
            <ul className="menu">
              {dataCompany.map(function (items, index) {
                return (
                  <>
                    <li
                      className="text-white text-clampBase uppercase font-semibold"
                      key={index}
                    >
                      {items.title}
                      <ul className="children mt-3">
                        {items.children.map(function (child, index) {
                          return (
                            <>
                              <li
                                className="item opacity-80 hover:opacity-100"
                                key={index}
                              >
                                {" "}
                                <Link href="#">
                                  <a className="flex w-full text-white font-normal text-clampBase pt-2 pb-2 normal-case">
                                    {child.name}
                                  </a>
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="relative flex flex-col w-50/2 py-5 lg:max-w-calc-8/12 lg:px-5">
            <ul className="menu">
              {dataCompany.map(function (items, index) {
                return (
                  <>
                    <li
                      className="text-white text-clampBase uppercase font-semibold"
                      key={index}
                    >
                      {items.title}
                      <ul className="children mt-3">
                        {items.children.map(function (child, index) {
                          return (
                            <>
                              <li
                                className="item  opacity-80 hover:opacity-100"
                                key={index}
                              >
                                {" "}
                                <Link href="#">
                                  <a className="flex w-full text-white font-normal text-clampBase pt-2 pb-2 normal-case">
                                    {child.name}
                                  </a>
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="relative w-full pt-10 py-5 lg:hidden">
            <span className="title text-white text-clampBase uppercase font-semibold">
              Subscribe to our newsletter
              <p className="text-white font-normal normal-case mb-6 opacity-80 mt-2">
                Depending on the company, a user experience designer may need to
                be a jack of all trades
              </p>
            </span>
            <form
              className="subsrcibe flex flex-row justify-between items-center flex-nowrap bg-white-12 px-2 py-2"
              method="post"
            >
              <label htmlFor="title" className="w-full pr-1">
                <span className="hidden">Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email (required)"
                  className="w-full bg-transparent text-clampBase text-white font-normal opacity-80"
                />
              </label>
              <span className="submit relative w-5 h-5 flex flex-row justify-center items-center flex-nowrap">
                <input
                  type="submit"
                  value="Subsrcibe"
                  className="w-5 h-5 opacity-0 z-1"
                />
                <i className="w-5 h-5 absolute top-0 left-00">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9084 2.06274C18.8282 1.99671 18.7142 1.98139 18.6176 2.02351L1.15569 9.64706C1.06168 9.68812 1.00115 9.77625 1.00002 9.87364C0.998886 9.97102 1.05743 10.0604 1.15053 10.1033L4.6 11.5661C4.69062 11.6079 11.8 8.08753 11.8 8.08753L7.43749 12.6798C7.34922 12.7727 7.3 12.896 7.3 13.0242V16.4303C7.3 16.8781 7.84325 17.1001 8.15685 16.7806L10.441 14.4532L14.0421 16.1658C14.1125 16.1974 14.194 16.1987 14.2655 16.1695C14.337 16.1402 14.3915 16.0833 14.4148 16.0134L18.9876 2.32856C19.0196 2.23299 18.9884 2.12878 18.9084 2.06274Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </i>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className="m-auto px-8 py-5 text-center xl:container border-t border-gray-600 lg:p-8">
        <span className="copyright text-white font-normal text-clampBase">
          TekNix © {new Date().getFullYear()}. Powered by
          <Link href="/">
            <a> TekNix</a>
          </Link>
        </span>
      </div>
    </footer>
  );
}
