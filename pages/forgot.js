import Link from "next/link";
import { IconBack } from "../components/icon";
import LayoutLogin from "../components/Layout/layoutLogin";
export default function Forgot() {
  return (
    <div className="form-wrap p-6 w-full lg:w-128 lg:p-14">
      <div
        className="nav top flex flex-row justify-between items-center w-full pb-12"
        role="navigation"
      >
        <Link href="/login">
          <a className="nav-left nav-back w-12 h-12 flex flex-row justify-center items-center rounded-full bg-gray-200">
            <IconBack />
          </a>
        </Link>
      </div>
      <div className="form forgot">
        <div className="form-inner flex flex-col min-h-96" method="post">
          <h1 className="title titleFr">Forgot Password</h1>
          <span className="notice mb-8">
            Please enter your username or email address. You will receive a link
            to create a new password via email.
          </span>
          <label htmlFor="username" className="block mb-10">
            <span className="hidden">Number phone or email</span>
            <input
              type="text"
              className=" text text-base text-gray-700 w-full h-12 border-b focus:outline-none focus:border-indigo-700 bg-transparent px-4"
              id="username"
              placeholder="Username or email"
            />
          </label>
          <button type="submit" className="btnSub" name="reset">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

Forgot.Layout = LayoutLogin;
