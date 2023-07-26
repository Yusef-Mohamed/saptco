import React from "react";
import Stages from "../../components/Stages";
import FormStage3 from "./components/FormStage3";

function StageThree() {
  return (
    <div className="bg-white">
      <div className="container max-w-[650px] mx-auto ">
        <div className="py-1 ">
          <Stages stage={3} />
        </div>
        <h1 className="text-3xl font-semibold mb-4">الرجاء ادخال بياناتك</h1>
        <FormStage3 />
      </div>
    </div>
  );
}

export default StageThree;
