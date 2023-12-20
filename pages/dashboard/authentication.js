import { ImageAuthen } from "/components/Gallery/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import Switch from "/components/Switch";
export default function Authentication() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white dark:bg-gray-800">
      <div className="thumbnail grid place-items-center">
        <ImageAuthen />
      </div>
      <h2 className=" text-2xl mt-8 font-semibold text-center text-gray-700 capitalize dark:text-white">
        Authentication
      </h2>
      <Switch />
    </section>
  );
}

Authentication.Layout = LayoutDashboard;
