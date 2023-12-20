import Image from "next/image";
import {
  IconCamera,
  IconCaretDown,
  IconDownload,
  IconShare,
} from "../../components/Gallery/icon";
import { ImageAvatarProfile, ImageQR } from "../../components/Gallery/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Profile() {
  return (
    <div id="profile" className="w-full bg-dashboard">
      <div className="relative grid justify-center">
        <div className=" pt-20 grid  justify-center relative">
          <ImageAvatarProfile />
          <div className="w-7 h-7 bg-black bg-opacity-50 rounded-full grid absolute justify-center items-center top-40 left-24">
            <IconCamera />
          </div>
        </div>
        <div className="text-white text-xl pt-6 pb-7">Tran Bich Tuyen</div>
      </div>
      <div className="bg-white rounded-t-xl p-4">
        <div className="bg-dashboard text-white px-4 py-3 flex justify-between items-center rounded-lg">
          <div className=" w-12 h-12">
            <ImageQR />
          </div>
          <span className="w-full mx-4 text-base">Mã QR</span>
          <button className="ml-4">
            <IconDownload />
          </button>
          <button className="ml-4">
            <IconShare />
          </button>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Họ & tên</label>
          <input
            className="text-base p-4 bg-gray-100 rounded-lg outline-none"
            type="text"
            value="Tran Bich Tuyen"
          ></input>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Email</label>
          <input
            className="text-base p-4 bg-gray-100 rounded-lg outline-none"
            type="text"
            value="miizoo@gmail.com"
          ></input>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Số điện thoại</label>
          <div className="flex justify-between">
            <div className=" w-auto p-4 bg-gray-100 rounded-lg flex items-center justify-between">
              <div className="w-5 h-5">
                <Image src="/img/flag.svg" width="20" height="20" alt="flag" />
              </div>
              <select className="bg-gray-100 px-2  outline-none">
                <option value="vietnam" className=" text-clampSx">
                  +84
                </option>
                <option value="my" className=" text-clampSx">
                  +1
                </option>
                <option value="hanquoc" className=" text-clampSx">
                  +82
                </option>
              </select>
              <div>{/* <IconCaretDown /> */}</div>
            </div>
            <input
              className=" w-full ml-3 text-base p-4 bg-gray-100 rounded-lg outline-none"
              type="text"
              value="0909090909"
            ></input>
          </div>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Ngày sinh</label>
          <input
            className="text-base p-4 bg-gray-100 rounded-lg outline-none"
            type="text"
            value="19/09/1990"
          ></input>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Địa chỉ 1</label>
          <input
            className="text-base p-4 bg-gray-100 rounded-lg outline-none"
            type="text"
          ></input>
        </div>
        <div className="grid mt-4">
          <label className="text-clampSm mb-1">Địa chỉ 2</label>
          <input
            className="text-base p-4 bg-gray-100 rounded-lg outline-none"
            type="text"
          ></input>
        </div>
        <div className="flex justify-between mt-4 ">
          <div className="grid mr-2 w-1/2">
            <label className="text-clampSm mb-1">Thành phố</label>
            <input
              className="text-base p-4 bg-gray-100 rounded-lg w-full outline-none"
              type="text"
            ></input>
          </div>
          <div className="grid ml-2 w-1/2">
            <label className="text-clampSm mb-1">Quốc gia</label>
            <div className=" w-auto p-4 bg-gray-100 rounded-lg flex items-center justify-between">
              <select className="bg-gray-100 px-2 w-full outline-none"></select>
              <div>{/* <IconCaretDown /> */}</div>
            </div>
          </div>
        </div>
        <div className="text-clampSm rounded-xl p-4 text-white bg-dashboard mt-4 flex justify-center">
          <button>Cập nhật ngay</button>
        </div>
      </div>
    </div>
  );
}
Profile.Layout = LayoutDashboard;
