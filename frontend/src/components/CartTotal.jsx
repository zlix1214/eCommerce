import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
const CartTotal = () => {
  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);
  return (
    <div>
      <div className="w-full">
        <div className="text-2xl">
          <Title text1={"購物車總計"} text2={""} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>小計</p>
            <p>
              {currency} {getCartAmount()}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>運費</p>
            <p>
              {currency} {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>總金額</b>
            <b>
              {currency}{" "}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
