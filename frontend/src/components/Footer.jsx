import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            我們致力於提供高品質商品與安心的購物體驗，從選品、包裝到售後服務，都以顧客滿意為首要目標。謝謝您對我們的支持，歡迎隨時與我們聯繫，讓我們持續為您帶來更好的服務。
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">公司資訊</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>主頁</li>
            <li>商品</li>
            <li>運送</li>
            <li>隱私條款</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">聯絡方式</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>(02)2891-1234</li>
            <li>fiorvo.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center py-5 text-sm">
          © 2025 fiorvo.com 版權歸本站所有，感謝您的支持。
        </p>
      </div>
    </div>
  );
};

export default Footer;
