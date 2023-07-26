import React from "react";

function FormStage4() {
  return (
    <form className="p-4 border rounded-lg shadow-lg">
      <div className="relative">
        <input
          type="text"
          className="input-text"
          placeholder="الاسم علي البطاقة"
        />
        <span className="text-2xl text-black absolute whitespace-nowrap top-[50%] -translate-y-[50%] left-4 ">
          <i className="fa-solid fa-user"></i>
        </span>
      </div>
      <input
        type="text"
        className="input-text"
        placeholder="الرقم المدون علي البطاقة"
      />
      <div className="my-4">
        <div className="flex justify-between flex-row-reverse">
          <span className="flex gap-4 text-2xl items-center">
            التاريخ
            <i className="fa-solid fa-calendar"></i>
          </span>
          <span className="flex gap-4 text-2xl items-center">
            كود الحماية
            <i className="fa-solid fa-credit-card"></i>
          </span>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="input-text placeholder:text-center"
            placeholder="CCV"
          />
          <input
            type="text"
            className="input-text placeholder:text-center"
            placeholder="YY"
          />
          <input
            type="text"
            className="input-text placeholder:text-center"
            placeholder="MM"
          />
        </div>
      </div>
      <button className="border-none outline-none bg-main text-white w-3/4  text-center rounded-lg mx-auto block  p-2 text-xl my-4">
        احجز الان
      </button>
    </form>
  );
}

export default FormStage4;
