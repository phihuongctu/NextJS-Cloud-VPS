import { IconMark } from "/components/Gallery/icon";
import { useEffect } from "react";
export default function Notification({ showNotify, setShowNotify }) {
  useEffect(() => {
    if (showNotify) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [showNotify]);
  return (
    <>
      <div className="count_item absolute w-5 h-5 -top-2 -right-2 text-white bg-red-500 rounded-full text-xs p-0.5">
        88
      </div>
      <div
        className={`${
          showNotify ? " hidden" : " block absolute top-7 right-4"
        } w-96 bg-white text-black rounded-lg min-h-96  `}
      >
        <div className="dropdown-head flex items-center justify-between p-4 border-b border-gray-100 text-lg  ">
          <span className="title-popup">Notifications</span>
          <a className="flex items-center text-blue-600">
            <IconMark />
            <span className="title ml-2 text-sm ">Mark as read all</span>
          </a>
        </div>
        <ul className="">
          <li className="unread  ">
            <a
              href=""
              className="flex items-center p-4  border-b border-gray-100"
            >
              <div className="ticket-thumb w-9 h-9 rounded-full bg-blue-600"></div>
              <div className="ticket-info flex flex-col ml-4 flex-1 text-left">
                <span className="title text-sm mb-1 font-semibold">
                  Created order: #7432
                </span>
                <span className="date text-xs text-gray-400 ">
                  2 months ago
                </span>
              </div>
              <span className="status w-2 h-2 rounded-full bg-red-600"></span>
            </a>
          </li>
          <li className="read  ">
            <a
              href=""
              className="flex items-center p-4  border-b border-gray-100"
            >
              <div className="ticket-thumb w-9 h-9 rounded-full bg-blue-600"></div>
              <div className="ticket-info flex flex-col ml-4 flex-1 text-left">
                <span className="title text-sm mb-1 ">
                  Created order: #7432
                </span>
                <span className="date text-xs text-gray-400 ">
                  2 months ago
                </span>
              </div>
              {/* <span className="status w-2 h-2 rounded-full bg-red-600"></span> */}
            </a>
          </li>
        </ul>
        <a
          id="loadMore"
          className="border-t w-full absolute left-0 bottom-0 p-4"
        >
          View All
        </a>
      </div>
    </>
  );
}
