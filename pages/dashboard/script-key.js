import {
  IconClose,
  IconInfo,
  IconMyService,
  IconKeyLg,
  IconUnion,
  IconUnionLg,
  IconEdit,
  IconTrashGrey,
} from "../../components/Gallery/icon";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import Link from "next/link";
import PopupAddNew from "../../components/Dashboard/popupaddNew";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import Tag from "../../components/Dashboard/sectionTag";
export default function ScriptKey() {
  const dataScriptKey = [
    {
      title: "Label Name",
      type: "boot",
      time:"19/10/2020 07:46 "
    },
    {
      title: "Label Name",
      type: "pxe",
      time:"19/10/2020 07:46 "
    },
    {
      title: "Label Name",
      type: "boot",
      time:"19/10/2020 07:46 "
    },
  ];
  return (
    <div id="scriptkey">
      <main>
        <HeaderDashboard title="Script Key" minititle="Đây là tiêu đề nhỏ viết tầm khoảng 2 dòng bổ nghĩa cho phần tiêu đề lớn"/>
        <Tag title="script"/>
        <div>
          {dataScriptKey.length === 0 ?
            <div className="min-h-96 grid content-center">
              <div className="grid justify-center items-center  p-4 ">
                <div className="bg-grey-100  w-16 h-16 rounded-full grid items-center justify-center"><IconUnionLg /></div>
              </div>
              <div className="grid justify-center items-center">
                <span className="text-center mb-3 text-xl font-bold">Bạn chưa có Script key nào!</span>
                <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse commodo.</span>
              
              </div>
            </div> :
          dataScriptKey.map(function (item, index) {
            return (
              <Link href="" key={index}>
                  <div className="h-20 px-4 border-b flex items-center dark:border-opacity-50">
                    <div className="w-10 min-w-max h-10 rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                      <IconUnion />
                    </div>
                    <div className="ml-4 whitespace-nowrap w-full">
                      <h3>{item.title}</h3>
                      <span className=" text-gray-400 text-clampSx font-bold">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="pl-2">
                        <IconEdit />
                      </div>
                      <div className="pl-2">
                        <IconTrashGrey />
                      </div>

                    </div>
                  </div>
                </Link>
            );
          })}
        </div>
        <PopupAddNew link="/dashboard/add-script-key" />
        <div className="h-52"></div>
      </main>
    </div>
  );
}
ScriptKey.Layout = LayoutDashboard;
