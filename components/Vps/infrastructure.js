import Image from "next/image";
import { useState } from "react";
import LayoutTitle from "../Vps/layoutTitle";
import LayoutTitleOption from "../Vps/LayoutTitleOption";
const dataInfrastructure = [
  {
    name: "Điện toán đám mây",
    image: "/img/bare-metal.svg",
    value: "large",
  },
  {
    name: "Medium",
    image: "/img/cloud-computer.svg",
    value: "medium",
  },
  {
    name: "Small",
    image: "/img/high-computer.svg",
    value: "small",
  },
];

export default function Infrastructure() {
  // const [checked, setChecked] = useState(false);
  // const isChecked = () => setChecked(checked);

  return (
    <div className="infrastructure">
      <LayoutTitle>
        Cơ sở hạ tầng
      </LayoutTitle>
      <div className="carousel flex flex-row justify-start items-center flex-nowrap pl-2">
        {dataInfrastructure.map(function (items, index) {
          return (
            <>
              <label
                className="item flex flex-col justify-center items-center flex-nowrap px-2 pb-2 cursor-pointer"
                htmlFor={items.value}
                key={index}
              >
                <input
                  type="radio"
                  name="infrastructure"
                  id={items.value}
                  value={items.value}
                />
                <div className="info relative group overflow-hidden w-56 h-40 px-4 pt-7 pb-4 flex flex-col justify-between items-center flex-nowrap rounded-xl bg-white border mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 hover:shadow-black-4-8 hover:border-primary transition-all">
                  <i className="checked hidden group-hover:block absolute -top-1 -right-1">
                    <Image src={"/img/checked.svg"} width={50} height={50} />
                  </i>
                  <Image
                    src={items.image}
                    width={64}
                    height={64}
                    className="filter drop-shadow-black-25"
                  />
                  <span className="name w-full text-center text-black text-opacity-80 text-clampSm font-semibold truncate">
                    {items.name}
                  </span>
                </div>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
