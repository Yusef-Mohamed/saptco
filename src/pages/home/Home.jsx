import React from "react";
import MainForm from "./components/MainForm";

function Home() {
  return (
    <div className="container-md mx-auto border p-6 rounded-xl shadow-lg  bg-white ">
      <img
        src="https://static.wixstatic.com/media/2f7533_003472ef25a34e38ae47461a759882a7~mv2.jpg/v1/fill/w_658,h_346,al_c,lg_1,q_80,enc_auto/2f7533_003472ef25a34e38ae47461a759882a7~mv2.jpg"
        alt=""
        className="mx-auto rounded-md"
      />
      <MainForm />
      <div className="max-w-[650px] mx-auto ">
        <video
          src="https://video.wixstatic.com/video/016529_5cbb6b7775f940c1989c549725246bd3/720p/mp4/file.mp4"
          preload="none"
          autoPlay
          muted
          controls
          playsInline="true "
        ></video>
      </div>
      <div className=" mx-auto max-w-[650px]">
        <div className="w-4/5 mx-auto">
          <img
            src="
          https://static.wixstatic.com/media/2f7533_9a1f23061c1e46718afe7305507cf240~mv2.jpg/v1/fill/w_560,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f7533_9a1f23061c1e46718afe7305507cf240~mv2.jpg"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/2f7533_f5acc716c8284594bb8decb4fbec1297~mv2.jpg/v1/fill/w_560,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f7533_f5acc716c8284594bb8decb4fbec1297~mv2.jpg"
            alt=""
          />
          <img
            src="
          https://static.wixstatic.com/media/2f7533_73f75e517d9d46369b53966f7ff4f8b9~mv2.jpg/v1/fill/w_560,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f7533_73f75e517d9d46369b53966f7ff4f8b9~mv2.jpg"
            alt=""
          />
          <img
            src="
          https://static.wixstatic.com/media/2f7533_a390cde6551f40b1b7da794441903d29~mv2.jpg/v1/fill/w_560,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f7533_a390cde6551f40b1b7da794441903d29~mv2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" mx-auto max-w-[650px] my-8">
        <div className="grid gap-[40px] grid-cols-2">
          <img
            src="https://static.wixstatic.com/media/2f7533_c627b7c6dba04c409f9e0c107ec1d181~mv2.jpg/v1/fill/w_194,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon-001_ar.jpg"
            alt=""
            className="col-span-1  mx-auto"
          />
          <img
            src="https://static.wixstatic.com/media/2f7533_32ffc6b4ffd0474bbdb1d0a3cd5a337d~mv2.jpg/v1/fill/w_196,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon-002_ar.jpg"
            alt=""
            className="col-span-1 mx-auto"
          />
          <img
            src="https://static.wixstatic.com/media/2f7533_32ffc6b4ffd0474bbdb1d0a3cd5a337d~mv2.jpg/v1/fill/w_196,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon-002_ar.jpg"
            alt=""
            className="col-span-1  mx-auto"
          />
          <img
            src="https://static.wixstatic.com/media/2f7533_0c3c56e5106d4916b95d47034a756934~mv2.jpg/v1/fill/w_196,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/icon-004_ar.jpg"
            alt=""
            className="col-span-1  mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
