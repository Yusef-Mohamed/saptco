import React from "react";
import Stages from "../../components/Stages";
import Trip from "./components/Trip";

function StageTwo() {
  return (
    <div className="bg-white">
      <div className="container max-w-[650px] mx-auto ">
        <div className="py-1 ">
          <Stages stage={2} />
        </div>
        <h1 className="text-3xl font-semibold mb-4">رحلات مطابقة للبحث</h1>
        <div>
          <Trip
            heading={"عنوان الرحلة هنا"}
            details={[
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
            ]}
          />
          <Trip
            heading={"عنوان الرحلة هنا"}
            details={[
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
              "تفاصيل الرحله تكتب هنا",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default StageTwo;
