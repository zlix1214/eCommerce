import React from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        userId: token,
        paymentMethod: method,
        date: new Date().toISOString(),
      };

      const response = await axios.post(
        backendUrl + "/api/order/place",
        orderData,
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row gap-4 justify-between pt-5 sm:pt-14 min-h-[80vh]"
    >
      {/* -----------------Left Side------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"配送資訊"} text2={""} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="text"
            placeholder="姓氏"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="text"
            placeholder="名字"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
          type="email"
          placeholder="電子信箱"
        />
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
          type="number"
          placeholder="連絡電話"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="number"
            placeholder="郵遞區號"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="text"
            placeholder="國家"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="text"
            placeholder="城市"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
            type="text"
            placeholder="州/省"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 py-1.5 rounded px-3.5 w-full"
          type="text"
          placeholder="街道地址"
        />
      </div>
      {/* ----------------Right Side-------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"付款方式"} text2={""} />
          {/* ------------------Payment Method Selection-------------------- */}
          <div className="flex gap-3 flex-col lg:flex-row mt-3">
            <div
              onClick={() => setMethod("linepay")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-500 p-2 px-3 rounded-full ${
                  method === "linepay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.linepay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("visa")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-500 p-2 px-3 rounded-full ${
                  method === "visa" ? " bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.visa_logo} alt="" />
              <img></img>
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-500 p-2 px-3 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 teexy-sm font-medium mx-4">
                貨到付款
              </p>
              <img></img>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="border border-black mb-5 px-16 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            >
              確認下單
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
