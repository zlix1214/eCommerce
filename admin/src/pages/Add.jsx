import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price ? parseFloat(price) : 0);
      formData.append("size", JSON.stringify(size));
      formData.append("bestseller", bestseller);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("添加成功!");
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSize([]);
        setPrice("");
      } else {
        toast.error("添加失敗");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
    setIsSubmitting(false);
  };

  const toggleSize = (value) => {
    setSize((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">上傳商品圖片</p>
      </div>
      <div className="flex gap-2">
        {[image1, image2, image3, image4].map((img, idx) => (
          <label htmlFor={`image${idx + 1}`} key={idx}>
            <img
              className="w-20 cursor-pointer"
              src={!img ? assets.upload_area : URL.createObjectURL(img)}
              alt=""
            />
            <input
              onChange={(e) =>
                [setImage1, setImage2, setImage3, setImage4][idx](
                  e.target.files[0]
                )
              }
              type="file"
              id={`image${idx + 1}`}
              hidden
            />
          </label>
        ))}
      </div>
      <div className="w-full">
        <p className="mb-2">商品名稱</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border-1 border-gray-300"
          type="text"
          placeholder="在此輸入"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">商品描述</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border-1 border-gray-300"
          placeholder="在此輸入"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">商品分類</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2 border-1 border-gray-300"
          >
            <option value="Men">男裝</option>
            <option value="Women">女裝</option>
            <option value="Kids">童裝</option>
          </select>
        </div>

        <div>
          <p className="mb-2">細項</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2 border-1 border-gray-300"
          >
            <option value="Topwear">上衣</option>
            <option value="Bottomwear">下著</option>
            <option value="Winterwear">冬季衣著</option>
          </select>
        </div>

        <div>
          <p className="mb-2">價格</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px] border-1 border-gray-300"
            type="number"
            placeholder="000"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">商品尺寸</p>
      </div>
      <div className="flex gap-3">
        {["S", "M", "L", "XL", "XXL"].map((sz) => (
          <button
            type="button"
            key={sz}
            onClick={() => toggleSize(sz)}
            className={`${
              size.includes(sz) ? "bg-black text-white" : "bg-slate-200"
            } px-3 py-1 cursor-pointer`}
          >
            {sz}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          暢銷商品
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="border px-10 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
      >
        {isSubmitting ? "添加中..." : "添加商品"}
      </button>
    </form>
  );
};

export default Add;
