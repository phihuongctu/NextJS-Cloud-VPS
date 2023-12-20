import Link from "next/link";
import { IconBack } from "../components/icon";
import LayoutLogin from "../components/Layout/layoutLogin";
export default function Register() {
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
        <Link href="/login">
          <a className="nav-right nav-register font-bold text-indigo-700">
            {" "}
            Login
          </a>
        </Link>
      </div>
      <div className="form register">
        <div className="form-inner flex flex-col min-h-96" method="post">
          <h1 className="title titleFr">Register</h1>
          <label htmlFor="username" className="block mb-10">
            <span className="hidden">Email address</span>
            <input
              type="text"
              className="text inputTx"
              id="username"
              placeholder="Email address"
            />
          </label>
          <label htmlFor="password" className="block mb-10">
            <span className="hidden">Password</span>
            <input
              type="password"
              className="password inputTx"
              id="password"
              placeholder="Password"
            />
          </label>
          <button type="submit" className="btnSub" name="register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

Register.Layout = LayoutLogin;
