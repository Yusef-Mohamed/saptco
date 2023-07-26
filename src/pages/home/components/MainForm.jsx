import React from "react";
import Stages from "../../../components/Stages";
import { useNavigate } from "react-router";

function MainForm() {
  const nav = useNavigate();
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/stage-2");
  };
  return (
    <div className="max-w-[650px] mx-auto">
      <Stages stage={1} />
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="flex justify-evenly bg-[#b59266]  p-6 text-black mt-4 rounded-lg">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] w-fit">
            <input
              class="relative float-right -mr-[1.5rem] ml-4 mt-1 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="type"
              id="oneway"
              required
            />
            <label
              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-2xl "
              for="oneway"
            >
              ذهاب وعوده
            </label>
          </div>
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] w-fit">
            <input
              class="relative float-right -mr-[1.5rem] ml-4 mt-1 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="type"
              id="twoway"
              required
            />
            <label
              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-2xl "
              for="twoway"
            >
              ذهاب فقط
            </label>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="المغادرة من"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="الوصول الي"
            required
          />
        </div>
        <div className="break-line" />
        <div>
          <div>
            <label className="text-2xl ">تاريخ السفر / الذهاب :</label>
            <input
              type="date"
              className="w-full my-4 bg-[#b59266] p-4 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="text-2xl ">تاريخ السفر / العوده :</label>
            <input
              type="date"
              className="w-full my-4 bg-[#b59266] p-4 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="break-line" />
        <div>
          <label
            htmlFor=""
            className="bg-[#b59266] block text-white text-2xl w-1/2 text-center p-2 rounded-lg"
          >
            حدد ساعة الانطلاق
          </label>
          <select
            className="block border p-4 my-6 rounded-2xl text-2xl w-1/2"
            required
          >
            <option value="12">12:00</option>
            <option value="11">11:00</option>
            <option value="10">10:00</option>
            <option value="9">9:00</option>
            <option value="8">8:00</option>
            <option value="7">7:00</option>
            <option value="6">6:00</option>
            <option value="5">5:00</option>
            <option value="4">4:00</option>
            <option value="3">3:00</option>
            <option value="2">2:00</option>
            <option value="1">1:00</option>
          </select>
        </div>
        <div className="break-line" />
        <div>
          <label
            htmlFor=""
            className="bg-[#b59266] block text-white text-2xl w-1/2 text-center p-2 rounded-lg"
          >
            المسافرين
          </label>
          <select
            className="block border p-4 my-6 rounded-2xl text-2xl w-1/2"
            required
          >
            <option value="" disabled selected>
              البالغين
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
          </select>
          <select
            className="block border p-4 my-6 rounded-2xl text-2xl w-1/2"
            required
          >
            <option value="" disabled selected>
              الاطفال 0 - 12
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
          </select>
        </div>
        <div className="break-line" />
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="الرمز الترويجي ان وجد"
          />
        </div>
        <button
          type="submit"
          className="border-none outline-none bg-[#40695b] text-white text-center rounded-lg mx-2 block w-full p-4 text-2xl my-8"
        >
          بحث
        </button>
      </form>
    </div>
  );
}

export default MainForm;
