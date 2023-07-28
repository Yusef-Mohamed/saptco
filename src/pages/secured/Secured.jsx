import React from "react";
import { useNavigate } from "react-router";

function Secured() {
  const nav = useNavigate();
  return (
    <div className="bg-white min-h-screen flex justify-center flex-col gap-4 items-center">
      <img
        src="https://th.bing.com/th/id/OIP.eqTa25S4fopsty5LJ4_9dQHaCh?w=333&h=119&c=7&r=0&o=5&pid=1.7"
        alt=""
      />
      <h2 className="text-gray-900 font-semibold text-3xl">
        هذا الموقع امن للدفع
      </h2>
      <div className="container max-w-[650px] mx-auto bg-main p-6 rounded-xl shadow-2xl border-gray-900 border-2">
        <p className="text-3xl text-center ">
          تخضع جميع الدفعات والحركات المالية لمراقبة خاصة من قبل البنك المركزي
          العربي السعودي - SAMA
        </p>
        <img
          src="https://1.bp.blogspot.com/-FHt-z4kN6fA/YEC33-FXN-I/AAAAAAAAV_Q/rcD5WJyK5BYAOTZggc0-EoDrhVfrJvcnwCLcBGAsYHQ/w1200-h630-p-k-no-nu/%25D8%25A7%25D9%2584%25D8%25A8%25D9%2586%25D9%2583%2B%25D8%25A7%25D9%2584%25D9%2585%25D8%25B1%25D9%2583%25D8%25B2%25D9%258A%2B%25D8%25A7%25D9%2584%25D8%25B3%25D8%25B9%25D9%2588%25D8%25AF%25D9%258A.png"
          alt=""
        />
        <button
          className="w-1/2 block mx-auto bg-gray-900 text-white p-3 rounded-lg text-2xl"
          onClick={() => nav("/stage-4")}
        >
          الاستمرار للتسديد
        </button>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.b2OSKR1-Iqd89zZ_RPO6PwHaCt?pid=ImgDet&rs=1"
        alt=""
      />
    </div>
  );
}

export default Secured;
