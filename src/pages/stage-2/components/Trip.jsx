import React from "react";
import { useNavigate } from "react-router";

function Trip({ heading, price }) {
  const nav = useNavigate();
  return (
    <div className="bg-main w-2/3 px-8 py-6 rounded-lg my-6">
      <h2 className="text-xl font-semibold">
        <i className="fa-solid fa-bus text-black text-2xl ml-3"></i>

        {heading}
      </h2>
      <h2 className="text-xl font-semibold text-center my-6">{price}$</h2>
      <button
        onClick={() => nav("/stage-3")}
        className="border-none outline-none bg-white text-main text-center rounded-lg mx-2 block w-full p-2 text-xl my-4"
      >
        احجز الان
      </button>
    </div>
  );
}

export default Trip;
