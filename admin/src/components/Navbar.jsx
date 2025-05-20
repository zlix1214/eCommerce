import React from "react";
import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm flex justify-between items-center  py-2 px-[4%] ">
      <img className="w-[max(10px,80px)]" src={assets.logo2} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-900 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer"
      >
        登出
      </button>
    </div>
  );
};

export default Navbar;
