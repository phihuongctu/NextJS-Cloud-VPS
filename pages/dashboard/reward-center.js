import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import Tag from "../../components/Dashboard/sectionTag";
import {  
  IconPlus_12,  
} from "../../components/Gallery/icon";
import {ImageSpecialOffer } from "../../components/Gallery/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function RewardCenter() {
  const dataRewardCenter = [
    {
      title:"Giảm 10%",
      content:
        "Giảm 10% trên tổng hóa đơn khi đăng ký gói VPS trên 3 năm",
      time: "19/10/2020",
      tag:"Sử dụng"
    },
    {
      title:"Giảm 50k",
      content:
        "Giảm 50000 đ cho hóa đơn trên 3000000 đ",
      time: "19/10/2020",
      tag:"Sử dụng"
    },
    {
      title:"Miễn phí",
      content:
        "Dùng thử miễn phí dịch vụ trong 1 tháng",
      time: "19/10/2020",
      tag:"Sử dụng"
    },
    {
      title:"Giảm 10%",
      content:
        "Giảm 10% trên tổng hóa đơn khi đăng ký gói VPS trên 3 năm",
      time: "19/10/2020",
      tag:"Đã dùng"
    },
    {
      title:"Giảm 50k",
      content:
        "Giảm 50000 đ cho hóa đơn trên 3000000 đ",
      time: "19/10/2020",
      tag:"Đã dùng"
    },    
  ];
  return (
    <div id="rewardcenter" className="w-full bg-white">
      <div className="bg-dashboard">
        <div className="flex justify-center pt-8 items-center">
          <ImageSpecialOffer />
        </div>        
          <HeaderDashboard title="Trung tâm phần thưởng" minititle="Đây là tiêu đề nhỏ viết tầm khoảng 2 dòng bổ nghĩa cho phần tiêu đề lớn"/>
          <Tag title="rewardcenter"/>    
      </div>

      <div className=" contents items-center min-h-96 text-black px-2">
        {
          dataRewardCenter.map(function (item, index) {
            return (
              <div className={`flex border-b ${item.tag==="Đã dùng"?"text-gray-500":""}`} key={index}>
                <div className={`bg-blue-50 text-blue-500 text-sm  flex flex-wrap justify-center
                 items-center m-3 px-2 py-8 max-w-min rounded-md
                 ${item.tag==="Đã dùng"?"text-gray-500":""}
                 `}>
                 
                  {item.title}
                </div>
                <div className="grid items-center py-2 w-full">
                  <h3 className="text-clampSm font-bold">{item.content}</h3>
                  <span className=" text-xs text-gray-500 flex items-center">Xem chi tiết <IconPlus_12/></span>
                  <div className="flex justify-between items-center">
                    <span className="text-clampSx text-gray-400"> Hết hạn vào {item.time}
                    </span>
                    <button className={`p-2 mr-4 px-3 bg-dashboard rounded-md text-white text-xs ${item.tag==="Đã dùng"?"text-gray-500 bg-gray-100":""}`}>{item.tag}</button>
                  </div>
                  
                </div>
              </div>
            );
          })
        }
      </div>     
    </div>
  );
}
RewardCenter.Layout = LayoutDashboard;
