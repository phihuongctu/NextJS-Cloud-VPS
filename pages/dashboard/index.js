import LayoutDashboard from "/components/Layout/layoutDashboard";
import SliderDashboard from "/components/Slider/sliderDashboard";
import Ticket from "/components/Dashboard/Support/sectionspTicket";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Dashboard() {
  const [menuDashboard, setmenuDashboard] = useState(false);
  const showMore = () => setmenuDashboard(!menuDashboard);
  return (
    <div className="content-dashboard">
      <div id="dashboard">
        <main className="dashboard">
          <div className="dashboard-content m-auto">
            <div className="menu bg-dashboard h-auto m-auto p-4 text-white">
              {menuDashboard === false ?
                <ul className="menu-dashboard flex flex-row flex-wrap m-auto text-white text-center">
                  <li className=" w-3/12 h-16 mb-4 ">
                    <Link href="/dashboard/ticket">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/ticket.svg" width="24" height="24" alt="ticket" />
                        </div>
                        <span className="text-clampSm">Ticket</span>
                      </a>
                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/dashboard/billing">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/billing.svg" width="24" height="24" alt="billing" />
                        </div>
                        <span className="text-clampSm">Billing</span>
                      </a>
                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/dashboard/my-service">
                      <a>
                        <div className="w-10 h-10   m-auto grid items-center">
                          <Image src="/img/service.svg" width="24" height="24" alt="service" />
                        </div>
                        <span className="text-clampSm" >Service</span>
                      </a>
                    </Link>
                  </li>
                  <li className="w-3/12 h-16 mb-4">                   
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center" onClick={showMore}>
                          <Image src="/img/plus.svg" width="24" height="24" />
                        </div>
                        <span className=" text-clampSm">More</span>
                      </a>                   
                  </li>
                </ul>
                :
                <ul className="menu-dashboard flex flex-row flex-wrap m-auto text-white text-center">
                  <li className=" w-3/12 h-16 mb-4 ">
                    <Link href="/dashboard/ticket">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/ticket.svg" width="24" height="24" alt="ticket" />
                        </div>

                        <span className="text-clampSm">Ticket</span>
                      </a>

                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/dashboard/billing">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/billing.svg" width="24" height="24" alt="billing" />
                        </div>
                        <span className="text-clampSm">Billing</span>
                      </a>
                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/dashboard/my-service">
                      <div>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/service.svg" width="24" height="24" alt="service" />
                        </div>
                        <span className="text-clampSm" >Service</span>
                      </div>
                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">                    
                    <a>
                       <div className="w-10 h-10  m-auto grid items-center" onClick={showMore}>
                      <Image src="/img/dash.svg" width="24" height="24" alt="less" />
                    </div>
                    <span className="text-clampSm" >Less</span>
                    </a>                   
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/account/affiliate">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/referral.svg" width="24" height="24" alt="Referral" />
                        </div>
                        <span className="text-clampSm" >Referral</span>
                      </a>
                    </Link>
                  </li>
                  <li className=" w-3/12 h-16 mb-4  ">
                    <Link href="/dashboard/ssh-key">
                      <a>
                        <div className="w-10 h-10  m-auto grid items-center">
                          <Image src="/img/ssh-key-2.svg" width="24" height="24" alt="SSH Key" />
                        </div>
                        <span className="text-clampSm whitespace-nowrap" >SSH Key</span>
                      </a>
                    </Link>
                  </li>
                  <li className="w-3/12 h-16 mb-4">
                    <Link href="/dashboard/script-key">
                    <a>
                      <div className="w-10 h-10  m-auto grid items-center">
                      <Image src="/img/ssh-key-2.svg" width="24" height="24" alt="Script Key" />
                      </div>
                      <span className="text-clampSm whitespace-nowrap" >Script Key</span>
                    </a>
                    </Link>                    
                  </li>
                </ul>
              }
              <div className="flex flex-nowrap h-14 bg-white-12 border-solid border-search border rounded-lg p-4 ">
                <Image src="/img/search.svg" width="20" height="56" alt="search" />
                <input type="text" placeholder="Search..." className="w-full ml-4 outline-none placeholder-white bg-white bg-opacity-0">
                </input>
              </div>
            </div>
            <SliderDashboard />
            <div >
              <div className="flex flex-row flex-nowrap justify-between p-4 items-center">
                <h4 className="text-clampLg font-semibold">My Service</h4>
                <Link href="/dashboard/my-service">
                  <a className="text-clampSx text-blue-600 flex items-center" >
                    <span className="mr-2">View All</span>
                    <Image src="/img/arrow-blue.svg" width="12" height="12" alt="view all service" />
                  </a>
                </Link>

              </div>
              <div className="flex flex-row flex-wrap justify-between text-white font-semibold">
                <div className="w-3/6 cursor-pointer">
                  <div className=" h-28 bg-blue-500 px-4 pt-12 rounded-xl m-2">
                    <h6 className=" text-clampBase">VPS</h6>
                    <span className=" text-clampSx">64</span>
                  </div>
                </div>
                <div className="w-3/6 cursor-pointer">
                  <div className=" h-28 bg-blue-500 px-4 pt-12 rounded-xl m-2">
                    <h6 className="text-clampBase">Domain</h6>
                    <span className="text-clampSx">4</span>
                  </div>
                </div>
                <div className="w-3/6 cursor-pointer">
                  <div className=" h-28 bg-blue-500 px-4 pt-12 rounded-xl m-2">
                    <h6 className="text-clampBase">Storage</h6>
                    <span className="text-clampSx">3</span>
                  </div>
                </div>
                <div className="w-3/6 cursor-pointer">
                  <Link href="/account/subscriptions?status=on-hold">
                    <div className=" h-28 bg-blue-500 p-4 px-auto rounded-xl m-2 text-center ">
                      <h6 className="text-clampBase">View all</h6>
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full m-auto grid items-center">
                        <Image
                          src="/img/arrow-right.svg"
                          width="25"
                          height="25"
                          alt="view all"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <a href="/account/dang-ky" className="w-full">
                  <div className="p-4 px-auto flex flex-row flex-nowrap bg-blue-500 bg-opacity-20 mx-2 rounded-xl justify-center items-center">
                    <Image src="/img/plus.svg" width="24" height="24" alt="add new service" />
                    <span className=" text-clampSx font-semibold text-blue-600">Add New Service
                  </span>
                  </div>
                </a>
              </div>
            </div>
            <div >
              <Ticket />
            </div>
            {/* <div className="w-11/12 m-auto">
              <div className="flex flex-row flex-nowrap justify-between p-4">
                <h4 className="text-xl font-semibold">Support Ticket</h4>
                <a className="text-sm text-blue-600 my-auto">
                  View All
                  <Image src="/img/arrow-blue.svg" width="12" height="12" />
                </a>
              </div>
              <div className="p-4 px-auto flex flex-row flex-nowrap bg-white my-4 mx-2 rounded-xl justify-between">
                <div className="w-10 h-10 bg-pink-600 bg-opacity-20 rounded-full pl-2">
                  <Image src="/img/sp-ticket-need.svg" width="24" height="40" />
                </div>
                <a className="w-4/5 my-auto ml-5 dark:text-black">
                  Need Attention
                </a>
                <div className="w-1/5 m-auto text-right text-xl dark:text-black">
                  4
                </div>
              </div>
              <div className="p-4 px-auto flex flex-row flex-nowrap bg-white my-4 mx-2 rounded-xl justify-between">
                <div className="w-10 h-10 bg-pink-600 bg-opacity-20 rounded-full pl-2">
                  <Image
                    src="/img/sp-ticket-pendding.svg"
                    width="24"
                    height="40"
                  />
                </div>
                <a className="w-4/5 my-auto ml-5 dark:text-black">Pending</a>
                <div className="w-1/5 m-auto text-right text-xl dark:text-black">
                  5
                </div>
              </div>

              <div className="p-4 px-auto flex flex-row flex-nowrap bg-blue-500 bg-opacity-20 mx-2 rounded-xl justify-center">
                <Image src="/img/plus.svg" width="24" height="24" />
                <a className=" font-semibold text-blue-600">Add New Service</a>
              </div>
            </div>
             */}
            <div>
              <div className="flex flex-row flex-nowrap justify-between p-4">
                <h4 className="text-clampLg font-semibold ">Billing infomation</h4>
                <Link href="/dashboard/billing">
                  <a className="text-clampSx text-blue-600 flex items-center" >
                    <span className="mr-2">View All</span>
                    <Image src="/img/arrow-blue.svg" width="12" height="12" alt="view all billing" />
                  </a>
                </Link>

              </div>

              <Link href="/account/orders">
                <div className=" cursor-pointer p-4 px-auto flex flex-row flex-nowrap bg-white mb-4 mx-2 rounded-xl justify-between shadow-black-4-8" >

                  <div className="w-10 h-10 bg-pink-600 bg-opacity-10 rounded-full grid items-center">
                    <Image src="/img/billing-all.svg" width="24" height="24" alt="billing all" />
                  </div>
                  <a className="w-4/5 my-auto ml-5 dark:text-black">All</a>
                  <div className="w-1/5 m-auto text-right text-clampSm dark:text-black">
                    108
                  </div>
                </div>
              </Link>
              <Link href="/account/orders?status=completed">
                <div className="cursor-pointer p-4 px-auto flex flex-row flex-nowrap bg-white mb-4 mx-2 rounded-xl justify-between shadow-black-4-8">

                  <div className="w-10 h-10 bg-pink-600 bg-opacity-10 rounded-full grid items-center">
                    <Image src="/img/billing-com.svg" width="24" height="24" alt="completed" />
                  </div>
                  <a className="w-4/5 my-auto ml-5 dark:text-black">Completed</a>
                  <div className="w-1/5 m-auto text-right text-clampSm dark:text-black">
                    14
                  </div>
                </div>
              </Link>
              <Link href="/account/orders?status=processing">
                <div className="cursor-pointer p-4 px-auto flex flex-row flex-nowrap bg-white mb-4 mx-2 rounded-xl justify-between shadow-black-4-8">

                  <div className="w-10 h-10 bg-pink-600 bg-opacity-10 rounded-full grid items-center">
                    <Image src="/img/billing-pro.svg" width="24" height="24" alt="processing" />
                  </div>
                  <a className="w-4/5 my-auto ml-5 dark:text-black">Processing</a>
                  <div className="w-1/5 m-auto text-right text-clampSm dark:text-black">
                    14
                </div>
                </div>
              </Link>
              <Link href="/account/orders?status=cancelled">
                <div className="p-4 px-auto flex flex-row flex-nowrap bg-white mb-4 mx-2 rounded-xl justify-between shadow-black-4-8">

                  <div className="w-10 h-10 bg-pink-600 bg-opacity-10 rounded-full grid items-center">
                    <Image src="/img/billing-cancel.svg" width="24" height="24" alt="cancel" />
                  </div>
                  <a className="w-4/5 my-auto ml-5 dark:text-black">Cancelled</a>
                  <div className="w-1/5 m-auto text-right text-clampSm dark:text-black">
                    14
                </div>
                </div>
              </Link>

              {/* <div className="p-4 px-auto flex flex-row flex-nowrap bg-blue-500 bg-opacity-20 mx-2 rounded-xl justify-center">
                <Image src="/img/plus.svg" width="24" height="24" />
                <a className=" font-semibold text-blue-600">Add New Service</a>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
Dashboard.Layout = LayoutDashboard;
