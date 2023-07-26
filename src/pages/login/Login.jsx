import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const nav = useNavigate();

  return (
    <div className="bg-white">
      <div className="p-4 rounded-lg border shadow-lg  max-w-[650px] mx-auto  ">
        <form className="my-6 py-16">
          <div>
            <label className="text-xl text-slate-500">
              اسم المستخدم / الهوية الوطنية
            </label>
            <input required type="text" className="input-text" />
          </div>
          <div className="my-4">
            <label className="text-xl text-slate-500">كلمة المرور</label>
            <input required type="text" className="input-text" />
          </div>
          <button className="bg-main w-1/2 mx-auto p-3 rounded-lg block text-white font-semibold text-xl my-4">
            <i class="fa-solid fa-arrow-right-to-bracket ml-4"></i>
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
