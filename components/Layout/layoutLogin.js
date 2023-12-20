import Image from "next/image";
import logo from "../../public/img/Logo.svg";

const LayoutLogin = (props) => {
  return (
    <div className="account-login flex flex-row flex-nowrap w-full h-screen overflow-hidden">
      {props.children}
      <div className="background w-minus-128 bg-gray-200 hidden justify-center items-center lg:flex flex-row flex-nowrap">
        <Image
          src={logo}
          className="relative"
          alt="Logo Site"
          width={192}
          height={192}
        />
      </div>
    </div>
  );
};

export default LayoutLogin;
