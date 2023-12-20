import Sidebar from "../Sidebar/sideBar";
import MenuMobile from "/components/Menu/menuMobile";
export default function LayoutDashboard({ children }) {
  return (
    <section
      id="dashboard"
      className="flex bg-white dark:bg-gray-800 lg:h-full  pb-24 lg:p-0"
    >
      <Sidebar />
      <main className="w-full lg:max-w-5xl my-0 mx-auto lg:w-dashboard p-4   ">
        {children}
      </main>
      <MenuMobile />
    </section>
  );
}
