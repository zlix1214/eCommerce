import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewSletterBox from "../components/NewSletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 ">
        <Title text1={"關於我們"} text2={""} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Fiorvo
            創立於台灣，是一間立足亞洲、放眼全球的多元產業集團。創始人Felix
            Zheng，以創新與堅持品質為核心價值，成功跨足服飾、科技、生活用品、數位內容等多個領域，建立起從平價實用到高端精品的完整產品線，滿足不同市場的需求。
          </p>
          <p>
            我們相信「設計是為了解決問題」，我們持續與設計師、技術專家合作，推動產品與服務的全面進化。如今，我們的業務橫跨線上電商與實體零售，觸角延伸至東南亞、日本與歐洲市場。
          </p>
          <b className="text-gray-800">我們的使命</b>
          <p>
            我們致力於提供高品質商品與貼心服務，讓每位顧客都能安心購物、快樂體驗。我們相信，好的產品與真誠的服務，能為生活帶來實質的改變，這就是我們持續努力的動力。
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"為何我們值得信賴"} text2={""} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-2">
        <div className="group border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <b>品質保證</b>
          <p className="text-gray-600 group-hover:text-white">
            我們嚴選每一項商品，確保品質穩定、用得安心，為你把關每一個細節。
          </p>
        </div>
        <div className="group border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <b> 購物便利</b>
          <p className="text-gray-600 group-hover:text-white">
            從下單、配送到售後服務，我們提供簡單快速的流程，讓你輕鬆完成每一次購物。
          </p>
        </div>
        <div className="group border  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <b>優質客服</b>
          <p className="text-gray-600 group-hover:text-white">
            我們重視每位顧客的聲音，提供即時、貼心的服務支援，讓你無後顧之憂。
          </p>
        </div>
      </div>
      <NewSletterBox />
    </div>
  );
};

export default About;
