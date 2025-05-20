import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { assets, products } from "../assets/assets";
import { useEffect } from "react";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const sizeOrder = ["s", "m", "l", "xl", "xxl"];

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    console.log("productData:", productData);
  }, [productData]);

  const sortedSizes = productData?.size
    ?.slice()
    .sort(
      (a, b) =>
        sizeOrder.indexOf(a.toLowerCase()) - sizeOrder.indexOf(b.toLowerCase())
    );

  return productData ? (
    <div className=" pt-10 transtition-opacity ease-in duration-500 opacity-100">
      {/* -----------product data--------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------product image---------------- */}
        <div className="flex-1 flex gap-3 sm:flex-rwo">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]">
            {productData?.image?.map((item, index) => {
              return (
                <img
                  onClick={() => {
                    setImage(item);
                  }}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* ---------product details ----------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_dull_icon} alt="" className="w-5 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-mediumm">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>選擇尺寸</p>
            <div className="flex gap-2">
              {sortedSizes?.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`border py-2 px-4 transition-all duration-200 cursor-pointer
          ${
            item === size
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 text-black hover:bg-gray-200"
          }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="border px-10 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
          >
            加入購物車
          </button>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% 原創商品</p>
            <p>此商品可貨到付款</p>
            <p>7 天內可輕鬆退換貨</p>
          </div>
        </div>
      </div>
      {/* --------Description % Review Seection---------- */}
      {/* <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sunt
            placeat aspernatur aperiam, quod nesciunt dolores quis adipisci. Ad
            esse praesentium provident rerum minima dolorum odio qui velit
            illum. Ipsa!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            magni earum labore explicabo ut nesciunt atque at amet.
          </p>
        </div>
      </div> */}
      <hr className="mt-8" />
      {/* ------------Display related product---------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
