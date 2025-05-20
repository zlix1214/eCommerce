import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewSletterBox from "../components/NewSletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10">
        <Title text1={"聯絡我們"} text2={""} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">實體店面</p>
          <p className="text-gray-500">
            台灣 新北市 淡水區 <br />
            新春街85巷 原石雅苑社區
          </p>
          <p>
            電話 : (02)2891-1234 <br /> 信箱 : rraefelix@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">加入我們</p>
          <p className="text-gray-500">了解我們的團隊與職缺機會</p>
          <button className="border border-black my-8 px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            查看職缺
          </button>
        </div>
      </div>
      <NewSletterBox />
    </div>
  );
};

export default Contact;
