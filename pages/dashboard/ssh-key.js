import { IconClose, IconInfo, IconKey, IconKeyLg } from "/components/Gallery/icon";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import Link from "next/link";
import PopupAddNew from "../../components/Dashboard/popupaddNew";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import { IconEdit, IconTrashGrey } from "../../components/Gallery/icon";
export default function SshKey() {
  const dataSshKey = [
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
    <div id="sshkey">
      <main>
        <HeaderDashboard title="SSH Key" minititle="Đây là tiêu đề nhỏ viết tầm khoảng 2 dòng bổ nghĩa cho phần tiêu đề lớn" />
        <div className="min-h-96">
          {dataSshKey.length === 0 ?
            <div className="min-h-96 grid content-center">
              <div className="grid justify-center items-center  p-4 ">
                <div className="bg-gray-100  w-16 h-16 rounded-full grid items-center justify-center"><IconKeyLg /></div>

              </div>
              <div className="grid justify-center items-center">
                <span className="text-center mb-3 text-xl font-bold">Bạn chưa có SSH key nào!</span>
                <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse commodo.</span>
              </div>
            </div> :
            dataSshKey.map(function (item, index) {
              return (
                <Link href="" key={index}>
                  <div className="h-20 px-4 border-b flex items-center dark:border-opacity-50">
                    <div className="w-10 min-w-max h-10 rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                      <IconKey />
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
        <PopupAddNew link="/dashboard/add-ssh-key" />
      </main>
    </div>
  );
}
SshKey.Layout = LayoutDashboard;
