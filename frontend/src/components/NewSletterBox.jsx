import React from "react";

const NewSletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        首購必看！訂閱立刻打 8 折！
      </p>
      <p className="text-gray-400 mt-3">
        加入我們的會員名單，參與限時優惠、獨家新品、折扣活動！
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="電子信箱"
          required
        />
        <button
          type="submit"
          className="border-l px-10 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
        >
          訂閱
        </button>
      </form>
    </div>
  );
};

export default NewSletterBox;
