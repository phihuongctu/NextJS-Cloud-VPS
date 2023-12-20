import { useState } from "react";
import LayoutTitle from "../Vps/layoutTitle";
const dataAdditional = [
  {
    name: "Kích hoạt IPv6",
    value: "ipv6",
  },
  {
    name: "Kích hoạt sao lưu tự động",
    value: "auto",
  },
  {
    name: "Kích hoạt mạng riêng tư",
    value: "private",
  },
];

export default function Additional() {
  return (
    <div className="additional">
      <LayoutTitle>Additional</LayoutTitle>
      <div className="checkbox px-4">
        {dataAdditional.map(function (items, index) {
          return (
            <>
              <label
                htmlFor={items.value}
                className="mix-blend-luminosity opacity-80 py-1 flex flex-row justify-start items-center flex-nowrap mt-4 first:mt-0"
              >
                <input
                  type="checkbox"
                  name="additional"
                  value={items.value}
                  id={items.value}
                  className="appearance-none w-6 h-6 rounded bg-black bg-opacity-5"
                />
                <span className="name text-primary text-sm font-medium truncate ml-3">
                  {items.name}
                </span>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
