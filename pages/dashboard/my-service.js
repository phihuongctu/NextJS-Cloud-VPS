import HeaderDashboard from "/components/Dashboard/headerDashboard";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import { IconButtonView, IconMyService } from "/components/Gallery/icon";
import Link from "next/link";
import PopupAddNew from "/components/Dashboard/popupaddNew";
import Tag from "/components/Dashboard/sectionTag";
export default function Service(props) { 
  const dataService = [
    {
      title: "#7351 Admin 1111",
      price: "326.040",
      status: "Active",
    },

    {
      title: "#7351 Admin 1111",
      price: "326.040",
      status: "On hold",
    },
    {
      title: "#7351 Admin 1111",
      price: "326.040",
      status: "Pending",
    },
    {
      title: "#7351 Admin 1111",
      price: "326.040",
      status: "Cancel",
    },
    {
      title: "#7351 Admin 1111",
      price: "326.040",
      status: "Active",
    },
  ];
  return (
    <div id="service">
      <main>
        <div>
          <HeaderDashboard title="My Subscriptions"/>
          <Tag title="myservice"/>          
        </div>
        <div>
          {dataService.map(function (item, index){
            return (              
              <Link href="/view-subscription" key={index}>
              {item.status===props.status?
                <div className="h-20 lg:px-4 border-b flex items-center justify-between dark:border-opacity-50">
                  <div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
                    <IconMyService />
                  </div>
                  <div className="w-full ml-4 whitespace-nowrap ">
                    <h3 className="mb-1">{item.title}</h3>
                    <span className="text-blue-600 text-clampSx font-bold">
                      {item.price}{" "}
                      <span className="opacity-50 text-black dark:text-white">
                        {" "}
                        / month{" "}
                      </span>
                    </span>
                  </div>
                  <div className="w-52">
                    <span
                      className={`text-clampSx bg-opacity-20 dark:bg-opacity-20 rounded-full whitespace-nowrap py-1 p-2
                                    ${
                                      item.status === "On hold"
                                        ? " bg-red-200 text-red-500"
                                        : " bg-gray-200 text-gray-500"
                                    }
                                    ${
                                      item.status === "Active"
                                        ? " bg-green-200 text-green-500"
                                        : " bg-gray-200 text-gray-500"
                                    }
                                    ${
                                      item.status === "Pending"
                                        ? " bg-green-200 text-green-500"
                                        : " bg-gray-200 text-gray-500"
                                    }
                                    `}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div>
                    <IconButtonView />
                  </div>
                </div>
                :
                <div className="h-20 lg:px-4 border-b flex items-center justify-between dark:border-opacity-50">
                <div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
                  <IconMyService />
                </div>
                <div className="w-full ml-4 whitespace-nowrap ">
                  <h3 className="mb-1">{item.title}</h3>
                  <span className="text-blue-600 text-clampSx font-bold">
                    {item.price}{" "}
                    <span className="opacity-50 text-black dark:text-white">
                      {" "}
                      / month{" "}
                    </span>
                  </span>
                </div>
                <div className="w-52">
                  <span
                    className={`text-clampSx bg-opacity-20 dark:bg-opacity-20 rounded-full whitespace-nowrap py-1 p-2
                                  ${
                                    item.status === "On hold"
                                      ? " bg-red-200 text-red-500"
                                      : " bg-gray-200 text-gray-500"
                                  }
                                  ${
                                    item.status === "Active"
                                      ? " bg-green-200 text-green-500"
                                      : " bg-gray-200 text-gray-500"
                                  }
                                  ${
                                    item.status === "Pending"
                                      ? " bg-green-200 text-green-500"
                                      : " bg-gray-200 text-gray-500"
                                  }
                                  `}
                  >
                    {item.status}
                  </span>
                </div>
                <div>
                  <IconButtonView />
                </div>
              </div>
             }
              </Link>
            );
          })}
        </div>
        <PopupAddNew link="/register-vps"/>
        <div className="h-52"></div>
      </main>
    </div>
  );
}
Service.Layout = LayoutDashboard;
