import Link from "next/link";
import { IconBack } from "../components/icon";
import LayoutLogin from "../components/Layout/layoutLogin";
export default function Login() {
  return (
    <div className="form-wrap p-6 w-full lg:w-128 lg:p-14">
      <div
        className="nav top flex flex-row justify-between items-center w-full pb-12"
        role="navigation"
      >
        <Link href="/">
          <a className="nav-left nav-back w-12 h-12 flex flex-row justify-center items-center rounded-full bg-gray-200">
            <IconBack />
          </a>
        </Link>
        <Link href="/register">
          <a className="nav-right nav-register font-bold text-indigo-700">
            Register
          </a>
        </Link>
      </div>
      <div className="form login">
        <div className="form-inner flex flex-col min-h-96" method="post">
          <h1 className="title titleFr">Login</h1>
          <label htmlFor="username" className="block mb-10">
            <span className="hidden">Number phone or email</span>
            <input
              type="text"
              className="text text-base text-gray-700 w-full h-12 border-b focus:outline-none focus:border-indigo-700 bg-transparent px-4"
              id="username"
              placeholder="Number phone or email"
            />
          </label>
          <label htmlFor="password" className="block mb-10">
            <span className="hidden">Password</span>
            <input
              type="password"
              className="text text-base text-gray-700 w-full h-12 border-b focus:outline-none focus:border-indigo-700 bg-transparent px-4"
              id="password"
              placeholder="Password"
            />
          </label>
          <div className="forgot flex flex-row justify-between items-center flex-nowrap pb-10">
            <label
              htmlFor="forgot"
              className="flex flex-row justify-center items-center flex-nowrap"
            >
              <input type="checkbox" id="forgot" name="forgot" />
              <span className="font-medium ml-2">Remember me</span>
            </label>
            <Link href="/forgot">
              <a className="lost-pw text-indigo-700">Lost you password?</a>
            </Link>
          </div>
          <button type="submit" className="btnSub" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

Login.Layout = LayoutLogin;
