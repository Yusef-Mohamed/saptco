import React from "react";

function Stages({ stage }) {
  return (
    <div className="w-full h-[2px] bg-black relative mt-16 mb-32">
      <div className="flex w-full justify-between absolute -top-6">
        <div>
          <span
            className={`flex w-12 h-12 justify-center items-center rounded-full font-bold text-xl ${
              stage >= 1 ? "text-white bg-[#b59266]" : "text-[#b59266] bg-white"
            }`}
          >
            1
          </span>
          <h2 className="font-bold text-center text-xl mt-2">البحث</h2>
        </div>
        <div>
          <span
            className={`flex w-12 h-12 justify-center items-center rounded-full font-bold text-xl ${
              stage >= 2 ? "text-white bg-[#b59266]" : "text-[#b59266] bg-white"
            }`}
          >
            2
          </span>
          <h2 className="font-bold text-center text-xl mt-2">الحجز</h2>
        </div>
        <div>
          <span
            className={`flex w-12 h-12 justify-center items-center rounded-full font-bold text-xl ${
              stage >= 3 ? "text-white bg-[#b59266]" : "text-[#b59266] bg-white"
            }`}
          >
            3
          </span>
          <h2 className="font-bold text-center text-xl mt-2">بيانات المسافر</h2>
        </div>
        <div>
          <span
            className={`flex w-12 h-12 justify-center items-center rounded-full font-bold text-xl ${
              stage >= 4 ? "text-white bg-[#b59266]" : "text-[#b59266] bg-white"
            }`}
          >
            4
          </span>
          <h2 className="font-bold text-center text-xl mt-2">الدفع </h2>
        </div>
      </div>
    </div>
  );
}

export default Stages;
