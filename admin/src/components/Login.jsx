import axios from "axios";
import React from "react";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("登入成功!");
      } else {
        toast.error("登入失敗 請檢查您的電子信箱或密碼");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <div className="bg-white shadow-md round-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold md-4">管理後台</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb min-w-72">
            <p className="text-sm font-medium text-gray-700 my-2">電子信箱</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb min-w-72">
            <p className="text-sm font-medium text-gray-700 my-2">密碼</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="輸入密碼"
              required
            />
          </div>
          <button
            className="border w-full mt-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            type="submit"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
