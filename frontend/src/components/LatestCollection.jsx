import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatsetProducts] = useState([]);

  useEffect(() => {
    setLatsetProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"最新"} text2={"商品推薦"} />
        <p className="w-3/4 m-auto mt-2 text-xs sm:text-sm md:text-base text-gray-600">
          探索我們精心打造的最新系列，每一件商品都展現我們對細節與品質的堅持。
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollection;
