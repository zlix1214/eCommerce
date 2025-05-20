import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 mt-5">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className=" w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">最新上架</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            TypeAttack 落字寬褲
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">
              讓日常變得更有個性
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 h-128 object-cover"
        src={assets.hero}
        alt=""
      />
    </div>
  );
};

export default Hero;
