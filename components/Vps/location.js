import { data } from "autoprefixer";
import Image from "next/image";
import LayoutTitleOption from "../Vps/LayoutTitleOption";
import { useState } from "react";
const dataLocation = [
  {
    city: "Ho Chi Minh",
    country: "Vietnam",
    image: "/img/vietnam.svg",
    value: "hochiminh",
  },
  {
    city: "Bangkok",
    country: "Thailan",
    image: "/img/vietnam.svg",
    value: "bangkok",
  },
  {
    city: "New York",
    country: "USA",
    image: "/img/vietnam.svg",
    value: "newyork",
  },
];

const dataContinent = [
  {
    name: "Châu Á",
    value: "chaua",
  },
  {
    name: "Châu Âu",
    value: "chauau",
  },
  {
    name: "Châu Mỹ",
    value: "chaumy",
  },
];

export default function Location() {
  // const [click, setClick] = useState(false);
  // const isClicked = () => setClick(!click);

  return (
    <div className="location">
      <LayoutTitleOption Title="Location">
        <div className="continent text-right flex flex-row justify-between items-center flex-nowrap cursor-pointer mix-blend-luminosity opacity-80">
          <p className="current text-clampSm text-primary font-normal pr-2">
            All Location
          </p>
          <i className="w-3 h-3 inline-flex rotate-90">
            <Image src={"/img/arrow-blue.svg"} width={12} height={12} />
          </i>
          <ul className="list hidden">
            {dataContinent.map(function (items, index) {
              return (
                <>
                  <li key={index} value={items.value}>
                    {items.name}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </LayoutTitleOption>
      <div className="carousel flex flex-row justify-start items-center flex-nowrap pl-3">
        {dataLocation.map(function (items, index) {
          return (
            <>
              <label
                className="item flex flex-col justify-center items-center flex-nowrap px-1 pb-2 cursor-pointer"
                htmlFor={items.value}
                key={index}
              >
                <input
                  type="radio"
                  name="location"
                  value={items.value}
                  className="hidden"
                />
                <div className="info relative group overflow-hidden w-52 flex flex-row justify-start items-center flex-nowrap px-4 py-3 rounded-lg bg-white border mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 hover:shadow-black-4-8 hover:border-primary transition-all">
                  <i className="checked hidden group-hover:block absolute -top-1 -right-1">
                    <Image src={"/img/checked.svg"} width={32} height={34} />
                  </i>
                  <Image
                    src={items.image}
                    width={36}
                    height={36}
                    className="filter"
                  />
                  <span className="name text-clampSm font-semibold text-black text-opacity-80 truncate ml-3">
                    {items.city}
                    <p className="font-normal text-opacity-10 text-clampSx">{items.country}</p>
                  </span>{" "}
                </div>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
