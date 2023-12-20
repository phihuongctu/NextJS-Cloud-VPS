import Image from "next/image";

const LayoutTitleOption = ({ Title, children }) => {
  return (
    <div className="relative flex flex-row justify-between items-center flex-nowrap px-4">
      <h2 className="title text-black text-opacity-80 text-clampLg font-bold pr-4 py-5">
        {Title}
      </h2>
      {children}
    </div>
  );
};
export default LayoutTitleOption;
