import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">輕鬆換貨</p>
        <p className="text-gray-400">提供無負擔的換貨服務</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 天鑑賞期</p>
        <p className="text-gray-400">　享有 7 天內退貨權益</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">全年無休客服</p>
        <p className="text-gray-400">　24 小時全天候客服支援</p>
      </div>
    </div>
  );
};

export default OurPolicy;
