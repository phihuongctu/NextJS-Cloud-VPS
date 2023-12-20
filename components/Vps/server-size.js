import { data } from "autoprefixer";
import Image from "next/image";
import { useState } from "react";
import LayoutTitleOption from "../Vps/LayoutTitleOption";
import Slider from "react-input-slider";

const dataServerType = [
  {
    name: "Điện toán đám mây",
    image: "/img/cpu.svg",
    value: "large",
    price: "3.989.000",
    tmperiod: "month",
    hasChildren: true,
    children: [
      {
        name: "CPU",
        value: "10",
      },
      {
        name: "SSD",
        value: "55GB",
      },
      {
        name: "RAM",
        value: "8GB",
      },
      {
        name: "Bandwidth",
        value: "300GB",
      },
    ],
  },
  {
    name: "Medium",
    image: "/img/cpu.svg",
    value: "medium",
    price: "2.989.000",
    tmperiod: "month",
    hasChildren: true,
    children: [
      {
        name: "CPU",
        class: "cpu",
        value: "8",
      },
      {
        name: "SSD",
        class: "hard-drive",
        value: "55GB",
      },
      {
        name: "RAM",
        class: "ram",
        value: "8GB",
      },
      {
        name: "Bandwidth",
        class: "bandwith",
        value: "300GB",
      },
    ],
  },
  {
    name: "Small",
    image: "/img/cpu.svg",
    value: "small",
    price: "1.989.000",
    tmperiod: "month",
    hasChildren: true,
    children: [
      {
        name: "CPU",
        value: "4",
      },
      {
        name: "SSD",
        value: "55GB",
      },
      {
        name: "RAM",
        value: "8GB",
      },
      {
        name: "Bandwidth",
        value: "300GB",
      },
    ],
  },
];

const dataRange = [
  {
    name: "HDD",
    image: "/img/hdd.svg",
    min: "20",
    max: "100",
  },
  {
    name: "RAM",
    image: "/img/ram.svg",
    min: "15",
    max: "900",
  },
  {
    name: "CPU",
    image: "/img/cpu-20.svg",
    min: "50",
    max: "100",
  },
  {
    name: "Bandwidth",
    image: "/img/bandwidth.svg",
    min: "1000",
    max: "5000",
  },
];

export default function ServerSize() {
  const [click, setClick] = useState(false);
  const isClicked = () => setClick(!click);

  const [range, setRange] = useState({ x: 10, y: 10 });

  return (
    <div className="server-size">
      <LayoutTitleOption Title="Cấu hình máy chủ">
        <div
          className="custom text-right flex flex-row justify-between items-center flex-nowrap cursor-pointer mix-blend-luminosity opacity-80"
          onClick={isClicked}
        >
          <i className="w-4 h-4 inline-flex">
            <Image
              src={click ? "/img/available.svg" : "/img/filter.svg"}
              width={16}
              height={16}
            />
          </i>
          <p className="current text-clampSm text-primary font-normal pl-2">
            {click ? "Có sẵn" : "Tùy biến"}
          </p>
        </div>
      </LayoutTitleOption>
      {click ? (
        <>
          <div className="custom p-4">
            {dataRange.map(function (items, index) {
              return (
                <>
                  <label className={items.class} key={index}>
                    <div className="relative flex flex-row justify-start items-center flex-nowrap pb-6">
                      <i className="w-5 h-5 inline-flex">
                        <Image src={items.image} width={20} height={20} />
                      </i>
                      <span className="text-sm font-bold text-black text-opacity-60 ml-4">
                        {items.name}&nbsp;
                        <p className="inline text-red-600">*</p>
                      </span>
                      <i className="w-4 h-4 inline-flex mr-0 ml-auto ">
                        <Image src={"/img/reset.svg"} width={16} height={16} />
                      </i>
                    </div>
                    <div>
                      ({range.x}, {range.y})
                      <Slider
                        axis="x"
                        x={range.x}
                        onChange={({ x }) =>
                          setRange((range) => ({ ...range, x }))
                        }
                      />
                    </div>
                  </label>
                </>
              );
            })}
          </div>
          <div className="total px-4 pt-4 pb-2 flex flex-row justify-between items-center flex-wrap">
            <p className="text-black text-opacity-80 font-normal text-clampSm">
              Tổng cộng
            </p>
            <span className="amount text-primary text-clampBase font-semibold">
              2.366.800 đ
            </span>
            <button
              type="submit"
              value="apply"
              className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 flex flex-row justify-center items-center flex-nowrap rounded-xl p-4 text-white text-clampBase font-semibold mt-6"
            >
              <i className="h-5 mr-3">
                <Image src={"/img/circle-check.svg"} width={20} height={20} />
              </i>
              Áp dụng
            </button>
          </div>
        </>
      ) : (
        <div className="carousel flex flex-row justify-start items-center flex-nowrap pl-2">
          {dataServerType.map(function (items, index) {
            return (
              <>
                <label
                  className="item flex flex-col justify-center items-center flex-nowrap px-2 pb-2 cursor-pointer"
                  htmlFor={items.value}
                  key={index}
                >
                  <input
                    type="radio"
                    name="serverSize"
                    id={items.value}
                    value={items.value}
                    className="hidden"
                  />
                  <div className="info relative group overflow-hidden w-56 h-56 p-4 flex flex-col justify-between items-center flex-nowrap rounded-xl bg-white border text-center mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 hover:shadow-black-4-8 hover:border-primary transition-all">
                    <i className="checked hidden group-hover:block absolute -top-1 -right-1">
                      <Image src={"/img/checked.svg"} width={50} height={50} />
                    </i>
                    <Image
                      src={items.image}
                      width={48}
                      height={48}
                      className="filter drop-shadow-black-25"
                    />
                    <span className="name hidden w-full text-center text-black text-opacity-80 text-sm font-medium truncate">
                      {items.name}
                    </span>
                    {items.hasChildren && (
                      <ul className="config">
                        {items.children.map(function (child, index) {
                          return (
                            <>
                              <li key={index}>
                                <span className="text-primary text-clampSx">
                                  <b>{child.value}</b>&nbsp;
                                  {child.name}
                                </span>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    )}

                    <span className="amount  flex flex-row justify-center items-center flex-nowrap text-primary text-sm w-full text-center">
                      {items.price}&nbsp;/&nbsp;
                      <p className="tmperiod text-black text-opacity-30">
                        {items.tmperiod}
                      </p>
                    </span>
                  </div>
                </label>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
