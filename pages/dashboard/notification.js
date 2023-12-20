import {
  IconCheck,
  IconNotifyLg,
  IconTrash,
  IconUser,
} from "../../components/Gallery/icon";
import { ImageNotify } from "../../components/Gallery/image";
import SliderNotify from "../../components/Slider/sliderNotify";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Notification() {
  const dataNotify = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat ut tincidunt",
      time: "07:46 19/10/2020",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat ut tincidunt",
      time: "07:46 19/10/2020",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat ut tincidunt",
      time: "07:46 19/10/2020",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat ut tincidunt",
      time: "07:46 19/10/2020",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat ut tincidunt",
      time: "07:46 19/10/2020",
    },
  ];
  return (
    <div id="notification" className="w-full max-w-screen-2xl bg-white">
      <div className="bg-dashboard grid justify-center w-full text-center">
        <div className=" flex justify-center">
          <ImageNotify />
        </div>
        <h2 className="text-3xl font-bold m-4">Thông báo</h2>
        <span className="mb-7">
          Đây là tiêu đề nhỏ viết tầm khoảng 2 dòng bổ nghĩa cho phần tiêu đề
          lớn
        </span>
        <SliderNotify />
      </div>

      <div className=" contents items-center min-h-96 text-black px-2">
        {dataNotify.length === 0 ? (
          <div className="grid justify-center text-center items-center py-28">
            <div className="grid justify-center ">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full">
                <IconNotifyLg />
              </div>
            </div>
            <span className="mb-3 mt-5">Bạn chưa có thông báo nào !</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              suspendisse commodo.
            </span>
          </div>
        ) : (
          dataNotify.map(function (item, index) {
            return (
              <div className="flex border-b pt-3" key={index}>
                <div className="h-9 w-9 bg-gray-200 rounded-full m-4">
                  <IconUser />
                </div>
                <div className="grid items-center">
                  <h3 className="text-clampSm font-bold">{item.content}</h3>
                  <span className="text-clampSx text-gray-400">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-between p-4">
        <div className="p-4 rounded-lg bg-blue-100 flex items-center mr-2 w-1/2 justify-center">
          <IconTrash />
          <span className=" ml-3 text-blue-600">Xoá tất cả</span>
        </div>
        <div className="p-4 rounded-lg bg-dashboard flex items-center ml-2 w-1/2  justify-center">
          <IconCheck />
          <span className=" ml-3">Đánh dấu đã đọc</span>
        </div>
      </div>
    </div>
  );
}
Notification.Layout = LayoutDashboard;
