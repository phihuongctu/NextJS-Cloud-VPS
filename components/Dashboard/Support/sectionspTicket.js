import Image from "next/image";
import Link from "next/link";
export default function Ticket() {
  const dataTicket = [
    {
      img: "/img/sp-ticket-need.svg",
      title: "Need attention",
      amount: 4,
    },
    {
      img: "/img/sp-ticket-pendding.svg",
      title: "Pending",
      amount: 5,
    },
  ];
  return (
    <div>
      <div className="flex flex-row flex-nowrap justify-between p-4 items-center">
        <h4 className="font-semibold text-clampLg">Support Ticket</h4>
        <div>
          <Link href="/dashboard/ticket">
            <a className=" text-clampSx text-blue-600 flex items-center" >
              <span className="mr-2">View All</span>
              <Image src="/img/arrow-blue.svg" width="12" height="12" alt="view all ticket" />
            </a>
          </Link>
        </div>
      </div>
      <div className="dark:text-black">
        {dataTicket.map(function (item, index) {
          return (
            <Link
              key={index}
              href={`${item.title === "Need attention" ? "#" : "#"} ${item.title === "Pending" ? "/account/tickets?stt=pending" : "#"
                }`}
            >
              <div className="p-4 px-auto flex flex-row flex-nowrap bg-white mb-4 mx-2 rounded-xl justify-between shadow-black-4-8 cursor-pointer">
                <div className="w-10 min-w-max h-10 bg-pink-600 bg-opacity-20 rounded-full grid items-center ">
                  <Image src={`${item.img}`} width="24" height="24" alt="icon ticket" />
                </div>
                <span className="w-4/5 my-auto ml-5">{item.title}</span>
                <div className="w-1/5 m-auto text-right text-xl">
                  {item.amount}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href="/dashboard/new-ticket">
        <div className="p-4 px-auto flex flex-row flex-nowrap bg-blue-500 bg-opacity-20 mx-2 rounded-xl justify-center items-center cursor-pointer">
          <Image src="/img/plus.svg" width="24" height="24" />
          <span className=" font-semibold text-blue-600 text-clampSx">Add New Ticket</span>
        </div>
      </Link>
    </div>
  );
}
