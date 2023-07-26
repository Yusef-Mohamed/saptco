import React from "react";
import { useNavigate } from "react-router";

function TemporaryPass() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/login");
  };
  return (
    <div className="bg-white">
      <div
        className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  text-slatae-700"
        style={{ direction: "ltr" }}
      >
        <form className="my-6 py-16" onSubmit={(e) => handelSubmit(e)}>
          <h4 className="font-semibold text-xl  text-center my-10">
            ادخل الرقم السري المؤقت المرسل الي جوالك
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

export default TemporaryPass;
