import {
  IconCall,
  IconDiscount,
  IconLocation,
  IconMessage,
  IconCallBlue,
  IconService,
} from "../../components/Gallery/icon";
import Image from "next/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import {
  ImageAvatar,
  ImageBilling,
  ImagePaypal,
} from "../../components/Gallery/image";

export default function OrderDetail() {
  const dataOrderDetail = [
    {
      name: "Điện toán đám mây (x1)",
      price: "3.480.000đ",
      cpu: "2 CPU",
      ssd: "55GB SSD",
      ram: "4GB RAM",
      bandwidth: "2000GB Bandwidth",
      timestart: "01/01/2021 09:00",
      timeend: "01/03/2021 09:00",
      fee: "1.160.000 đ/tháng",
      month: "3 tháng",
    },
    {
      name: "Điện toán đám mây (x1)",
      price: "3.480.000đ",
      cpu: "2 CPU",
      ssd: "55GB SSD",
      ram: "4GB RAM",
      bandwidth: "2000GB Bandwidth",
      timestart: "01/01/2021 09:00",
      timeend: "01/03/2021 09:00",
      fee: "1.160.000 đ/tháng",
      month: "3 tháng",
    },
  ];
  return (
    <div id="orderdetail" className="w-full">
      <div className=" text-white w-full grid items-center justify-center pt-20 lg:pt-32 relative">
        <Image src="/img/Rectangle.svg" layout="fill" objectFit="cover"></Image>
        <h2 className="text-3xl h-20 w-80 md:w-full text-center pb-3 font-bold relative">
          Đây là tiêu đề lớn khoảng 2 dòng
        </h2>
        <div className="text-sm md:text-base grid justify-center py-1 relative">
          ID: 14346882
        </div>
        <div className="text-sm md:text-base grid justify-center py-1 relative ">
          Ngày: 01/01/2021
        </div>
        <div className="text-sm md:text-base justify-center py-1 flex relative ">
          Trạng thái: <span className="text-yellow-300 ml-1"> Đã hoàn tất</span>
        </div>
        <div className="flex justify-center relative ">
          <ImageBilling />
        </div>
      </div>
      <div className="grid justify-center items-center text-base md:text-lg pt-5">
        Tổng cộng
      </div>
      <div className="grid justify-center items-center text-blue-500 text-2xl font-semibold pb-5">
        6.880.000đ
      </div>

      <div className="p-2 max-w-screen-lg m-auto">
        <div className="p-4 bg-dashboard text-white font-semibold rounded-xl text-base md:text-x1">
          Chi tiết đơn hàng
        </div>
        <div className="md:flex md:justify-between">
          {dataOrderDetail.map(function (item, index) {
            return (
              <div key={index} className="md:w-50/2">
                <div className="flex justify-between m-4 text-base md:text-lg font-bold">
                  <div className="grid">
                    <span>{item.name}</span>
                    <span className="text-blue-500 ">{item.price}</span>
                  </div>
                  <Image
                    src="/img/cloud-computer.svg"
                    width="52"
                    height="52"
                  ></Image>
                </div>
                <table className=" text-sm md:text-base w-full border-b">
                  <tbody>
                    <tr className="flex justify-between pb-2">
                      <td className="grid px-4">
                        <span className="pb-2">{item.cpu}</span>
                        <span className="pb-2">{item.ssd}</span>
                        <span className="pb-2">{item.fee}</span>
                        <span className="pb-2">{item.timestart}</span>
                      </td>
                      <td className="grid px-4">
                        <span className="pb-2">{item.ram}</span>
                        <span className="pb-2">{item.bandwidth}</span>
                        <span className="pb-2">{item.month}</span>
                        <span className="pb-2">{item.timeend}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-2 max-w-screen-lg m-auto">
        <div className="p-4 bg-dashboard text-white font-semibold rounded-xl text-base md:text-xl">
          Thanh toán
        </div>
        <div className="p-4 flex">
          <ImagePaypal />
          <div className="grid w-full leading-6 pl-4">
            <span className="font-bold text-base">Paypal</span>
            <span className="text-sm opacity-70">0909090909 </span>
          </div>
          <button className="bg-blue-100 rounded-lg bg-opacity-70 text-blue-500 font-semibold text-xs px-2 m-1">
            Mặt định
          </button>
        </div>
        <div className="p-2 rounded-lg flex border mx-4">
          <div className="bg-discount h-9 w-9 flex justify-center items-center rounded-lg">
            <IconDiscount />
          </div>
          <div className="grid leading-6 pl-3">
            <span className="font-bold text-sm">Giảm 10%</span>
            <span className="opacity-70 text-xs">
              Giảm 10% trên tổng hoá đơn khi đăng kí gói
            </span>
          </div>
        </div>
        <div className="p-4 text-sm md:text-base border-b">
          <div className="flex justify-between leading-6 py-2">
            <span>Giá</span>
            <span className="text-blue-500">1.160.000đ /tháng</span>
          </div>
          <div className="flex justify-between leading-6 py-2">
            <span>Chu kỳ thanh toán</span>
            <span>3 tháng</span>
          </div>
          <div className="flex justify-between leading-6 py-2">
            <span>Số lượng máy</span>
            <span>1 máy</span>
          </div>
          <div className="flex justify-between leading-6 py-2">
            <span>Tạm tính</span>
            <span className="text-blue-500">3.456.000 đ</span>
          </div>
          <div className="flex justify-between leading-6 py-2">
            <span>Giảm giá</span>{" "}
            <span className="text-blue-500">-5000đ /tháng</span>
          </div>
        </div>
        <div className="flex justify-between leading-6 py-2 p-4 ">
          <span>Tổng cộng</span>
          <span className="text-lg md:text-xl font-bold text-blue-500">
            6.880.000 đ
          </span>
        </div>
      </div>
      <div className="p-2 max-w-screen-lg m-auto">
        <div className="p-4 bg-dashboard text-white font-semibold rounded-xl text-base md:text-x1">
          Thông tin thanh toán
        </div>
        <div className="grid justify-center">
          <div className=" flex justify-center pt-4">
            <ImageAvatar />
          </div>
          <span className="p-4">Trần Bích Tuyền</span>
        </div>
        <div className="grid justify-center">
          <div className="px-4 py-2 flex items-center">
            <IconLocation />
            <span className="text-clampSm pl-4">
              Phường 3, Thành phố Vị Thanh, Hậu Giang, Việt Nam
            </span>
          </div>
          <div className="px-4 py-2 flex items-center">
            <IconMessage />
            <span className="text-clampSm pl-4">tbtuyen@gmail.com</span>
          </div>
          <div className="px-4 py-2 flex items-center">
            <IconCall />
            <span className="text-clampSm pl-4">027 309 5999</span>
          </div>
        </div>
      </div>
      <div className="p-2 max-w-screen-lg m-auto">
        <div className="p-4 pb-8 text-xl font-bold grid justify-center">
          Bạn gặp sự cố với đơn hàng này?
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-1/2 lg:w-25/4 text-blue-500 grid justify-center">
            <IconCallBlue />
            <span className="py-4 font-bold">Hỗ trợ</span>
          </div>
          <div className="w-1/2 lg:w-25/4 text-blue-500 grid justify-center">
            <IconCallBlue />
            <span className="py-4 font-bold">Hỗ trợ</span>
          </div>
          <div className="w-1/2 lg:w-25/4 text-blue-500 grid justify-center">
            <IconCallBlue />
            <span className="py-4 font-bold">Hỗ trợ</span>
          </div>
          <div className="w-1/2 lg:w-25/4 text-blue-500 grid justify-center">
            <IconCallBlue />
            <span className="py-4 font-bold">Hỗ trợ</span>
          </div>
        </div>
      </div>
      <div className="p-2 max-w-screen-lg m-auto">
        <div className="flex justify-between leading-6 py-2 p-4 border-t text-sm text-blue-500">
          <span>Tổng cộng</span>
          <span className="font-semibold">6.880.000 đ</span>
        </div>
        <div className="p-4 bg-dashboard text-white font-semibold rounded-xl text-sm md:text-lg flex justify-center items-center ">
          <IconService />
          <span className="pl-2">Chi tiết dịch vụ</span>
        </div>
      </div>
    </div>
  );
}
OrderDetail.Layout = LayoutDashboard;
