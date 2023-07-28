import React from "react";
import { useNavigate } from "react-router";

function FormStage3() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/secured");
  };
  return (
    <form
      className="p-4 border rounded-lg shadow-lg"
      onSubmit={(e) => handelSubmit(e)}
    >
      <input
        type="text"
        className="input-text"
        required
        placeholder="الاسم الكامل"
      />
      <input
        type="text"
        className="input-text"
        required
        placeholder="رقم الهوية الوطنية / الاقامة"
      />
      <input
        type="text"
        className="input-text"
        placeholder="رقم الجوال"
        required
      />
      <div className="relative">
        <input type="date" className="input-text" required />
        <span className="text-2xl text-black absolute whitespace-nowrap top-[50%] -translate-y-[50%] right-10">
          تاريخ الميلاد
        </span>
      </div>
      <input
        type="text"
        className="input-text"
        required
        placeholder="الجنسية"
      />
      <select className="input-text text-2xl" required>
        <option disabled>الجنس</option>
        <option>ذكر</option>
        <option>انثي</option>
      </select>
      <input
        type="email"
        className="input-text"
        placeholder="البريد الالكتورني"
        required
      />
      <button className="border-none outline-none bg-main text-white w-3/4  text-center rounded-lg mx-auto block  p-2 text-xl my-4">
        احجز الان
      </button>
    </form>
  );
}

export default FormStage3;
