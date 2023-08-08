import React from "react";
import logo from "../assets/img/logo.png";
export default function Navbar() {
  return (
    <div className="">
      <div className="navbar flex items-center px-5 py-3 border border-b-gray-300  ">
        <div className="flex space-x-20 font-semibold">
          <div className="flex items-center">
            <div
              style={{
                filter: "brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(5865%) hue-rotate(264deg) brightness(101%) contrast(99%)",
              }}
            >
              <img src={logo} className="h-8 w-10" alt="" />
            </div>
            <div className="text-3xl text-purple-600 font-extrabold ml-3">
              {" "}
              PROPERTY DEALER
            </div>
          </div>
        </div>

        <div className=" w-[5.2rem] flex justify-center font-semibold hover:transition-all hover:duration-500 ml-auto border  border-white px-3 py-[0.4rem] bg-purple-600 text-white  rounded-md hover:border-purple-600  hover:bg-white hover:border-transparent  hover:text-purple-700">
          <button>LOGIN</button>
        </div>
        <div className="  w-[5.2rem] flex justify-center font-semibold hover:transition-all hover:duration-500 ml-4 border border-white px-3 py-[0.4rem] bg-purple-600 text-white  rounded-md hover:border hover:border-purple-600  hover:bg-white hover:border-transparent hover:text-purple-700">
          <button>SIGNUP</button>
        </div>
      </div>
    </div>
  );
}
