import Link from "next/link";
import { useState } from "react";
import { dataMenuMobile } from "./dataMenuMobile";
import SidebarMobile from "/components/Sidebar/sidebarMobile";
export default function MenuMobile() {
  const [barMobile, setbarMobile] = useState(true);
  const showSidebarMobile = () => setbarMobile(!barMobile);
  return (
    <div
      id="menu-mobile"
      className=" z-20 fixed bottom-0 left-0 right-0 pb-2 bg-blue-900  shadow-lg lg:hidden"
    >
      <div className="flex">
        {dataMenuMobile.map(function (items, index) {
          return (
            <div
              className="flex-1 group flex items-center relative"
              key={index}
            >
              {typeof items.path !== "undefined" ? (
                <Link href={typeof items.path !== "undefined" && items.path}>
                  <a
                    className={` ${
                      items.description === "home" ? " absolute -top-1/3" : ""
                    } flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-white border-b-2 border-transparent `}
                  >
                    <span className="flex flex-col items-center  px-1 pt-1 pb-2 ">
                      {items.icon}
                      <span className=" block mt-2 capitalize text-xs pb-1">
                        {items.name}
                      </span>
                    </span>
                  </a>
                </Link>
              ) : (
                <div
                  onClick={showSidebarMobile}
                  className=" flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-white border-b-2 border-transparent "
                >
                  <span className="flex flex-col items-center  px-1 pt-1 pb-2 ">
                    {items.icon}
                    <span className=" block mt-2 capitalize text-xs pb-1">
                      {items.name}
                    </span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <SidebarMobile barMobile={barMobile} setbarMobile={setbarMobile} />
    </div>
  );
}
