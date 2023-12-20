import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function Theme({ sidebar, setSidebar }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`toogle-theme ${
        sidebar ? "grid-cols-2" : "grid-cols-1"
      } grid place-items-center gap-4 p-4 `}
    >
      {/* {theme === "light" ? (
        <FiMoon
          size={32}
          className=" text-purple-600"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FiSun
          size={32}
          className=" text-purple-600"
          onClick={() => setTheme("light")}
        />
      )} */}

      <button
        className={`theme-black w-full text-center   rounded-lg p-4 ${
          theme === "dark"
            ? "bg-blue-100 text-blue-600 border-blue-200 "
            : "text-gray-500 "
        } ${sidebar ? "border" : "p-0 h-12 w-12 flex items-center"} `}
        onClick={() => setTheme("dark")}
      >
        <FiMoon size={32} className="m-auto mb-2" />
        <span className={`${sidebar ? "" : "hidden"}`}>Dark</span>
      </button>

      <button
        className={`theme-light w-full text-center  rounded-lg p-4 ${
          theme === "light"
            ? "bg-blue-100 text-blue-600 border-blue-200 "
            : "text-gray-500"
        } ${sidebar ? "border " : "p-0 h-12 w-12 flex items-center"}   `}
        onClick={() => setTheme("light")}
      >
        <FiSun size={32} className="m-auto mb-2" />
        <span className={`${sidebar ? "" : "hidden"}`}>Light</span>
      </button>
    </div>
  );
}
export default Theme;
