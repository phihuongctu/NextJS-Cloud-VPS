import { IconGoggle } from "/components/Gallery/icon";
export default function Switch({ title, img, child }) {
  return (
    <div className="flex items-center justify-center w-full mb-4 mt-8 ">
      <label
        htmlFor="toggle"
        className="flex items-center justify-between w-full bg-gray-100 p-3 rounded-lg cursor-pointer"
      >
        {/* toggle */}
        <div className="flex items-center">
          <figure className="svg">
            <IconGoggle />
          </figure>
          <span className="ml-2 dark:text-gray-800">Google Auth </span>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle" className="input-switch sr-only" />
          <div className="switch-bg block bg-gray-300 w-8 h-4 rounded-full" />
          <div className="dot absolute left-1 -top-0.5 -left-1 bg-gray-500 w-5 h-5 rounded-full transition" />
        </div>
      </label>
    </div>
  );
}
