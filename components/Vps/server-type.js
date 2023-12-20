// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import LayoutTitle from "../Vps/layoutTitle";
const dataType = [
  {
    name: "HĐH 64 bit",
    value: "type64",
  },
  {
    name: "HĐH 32 bit",
    value: "type32",
  },
  {
    name: "Ứng dụng",
    value: "typeapp",
  },
];
const dataServer = [
  {
    name: "CentOS",
    image: "/img/bare-metal.svg",
    value: "large",
    price: "1.589.000",
    tmperiod: "month",
    ver: "Select version",
    hasChildren: true,
    chilrder: [
      {
        verChild: "6 x64",
      },
      {
        verChild: "7 x64",
      },
      {
        verChild: "8 x64",
      },
    ],
  },
  {
    name: "Ubuntu",
    image: "/img/cloud-computer.svg",
    value: "medium",
    price: "1.789.000",
    tmperiod: "month",
    ver: "Select version",
    hasChildren: true,
    chilrder: [
      {
        verChild: "6 x64",
      },
      {
        verChild: "7 x64",
      },
      {
        verChild: "8 x64",
      },
    ],
  },
  {
    name: "Windows",
    image: "/img/high-computer.svg",
    value: "small",
    price: "1.989.000",
    tmperiod: "month",
    ver: "Select version",
    hasChildren: true,
    chilrder: [
      {
        verChild: "6 x64",
      },
      {
        verChild: "7 x64",
      },
      {
        verChild: "8 x64",
      },
    ],
  },
];

export default function ServerType() {
  return (
    <div className="server-type">
      <LayoutTitle>
        Loại máy chủ
      </LayoutTitle>
      <div className="type flex flex-row justify-start items-center flex-nowrap pb-3 pl-3">
        {dataType.map(function (items, index) {
          return (
            <>
              <label
                className="item flex flex-col justify-center items-center flex-nowrap px-1 pb-2 cursor-pointer"
                htmlFor={items.value}
                key={index}
              >
                <div className="info relative group overflow-hidden flex flex-row justify-start items-center flex-nowrap px-5 py-2 rounded-lg bg-white  border mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 hover:shadow-black-4-8 transition-all">
                  <span className="name w-full text-center text-primary text-clampSm font-normal truncate">
                    {items.name}
                  </span>
                  <input
                    type="radio"
                    name="typeLocatin"
                    id={items.value}
                    value={items.value}
                    className="hidden"
                  />
                </div>
              </label>
            </>
          );
        })}
      </div>
      <div className="carousel flex flex-row justify-start items-center flex-nowrap pl-2">
        {dataServer.map(function (items, index) {
          return (
            <>
              <label
                className="item flex flex-col justify-center items-center flex-nowrap px-2 pb-2"
                htmlFor={items.value}
                key={index}
              >
                <input
                  type="radio"
                  name="serverType"
                  id={items.value}
                  value={items.value}
                  className="hidden"
                />
                <div className="info relative group overflow-hidden w-56 h-60 flex flex-col justify-between items-center flex-nowrap px-3 pb-3 pt-9 rounded-xl bg-white  border mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 hover:shadow-black-4-8 hover:border-primary transition-all cursor-pointer">
                  <i className="checked hidden group-hover:block absolute -top-1 -right-1">
                    <Image src={"/img/checked.svg"} width={50} height={50} />
                  </i>
                  <Image
                    src={items.image}
                    width={64}
                    height={64}
                    className="filter drop-shadow-black-25"
                  />
                  <span className="name w-full text-black text-opacity-80 text-clampSm font-semibold truncate text-center">
                    {items.name}
                  </span>
                  <span className="amount flex flex-row justify-center items-center flex-nowrap text-primary text-clampSm font-semibold w-full text-center">
                    {items.price}
                    <p className="tmperiod text-black text-opacity-30 text-clampSm font-normal">
                      &nbsp;/&nbsp;{items.tmperiod}
                    </p>
                  </span>
                  <div className="version w-full">
                    <div className="current relative w-full flex flex-row justify-center items-center flex-nowrap truncate rounded-lg bg-second bg-opacity-5 px-2 py-3">
                      <p className="text-primary text-clampSm font-normal flex-1 text-center">
                        {items.ver}
                      </p>
                      <i className="w-4 h-4 rotate-90">
                        <Image src={"/img/arrow-blue.svg"} width={16} height={16} />
                      </i>
                    </div>
                    <ul className="list hidden"></ul>
                  </div>
                </div>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
