import Image from "next/image";
const dataScript = [
  {
    name: "Label script",
    image: "/img/rocket.svg",
    value: "srcipt",
  },
];

export default function StartupScript() {
  return (
    <div className="startup-script">
      <div className="relative flex flex-row justify-between items-center flex-nowrap px-4">
        <h2 className="title text-gray-600 text-lg font-semibold py-5">
          Startup Script
        </h2>
        <div className="continent text-right flex flex-row justify-between items-center flex-nowrap cursor-pointer mix-blend-luminosity opacity-80">
          <p className="current text-sm text-primary font-normal pr-2">
            Quản lý
          </p>
          <i className="w-3 h-3 inline-flex">
            <Image src={"/img/arrow-blue.svg"} width={12} height={12} />
          </i>
          <ul className="list hidden"></ul>
        </div>
      </div>
      <div className="carousel flex flex-row justify-start items-center flex-nowrap pl-3">
        {dataScript.map(function (items, index) {
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
                    width={24}
                    height={24}
                    className="filter"
                  />
                  <p className="font-normal">{items.name}</p>
                </div>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
