import React from "react";
import Stages from "../../components/Stages";
import FormStage4 from "./components/FormStage4";

function StageFour() {
  return (
    <div className="bg-white">
      <div className="container max-w-[650px] mx-auto ">
        <div className="py-1 ">
          <Stages stage={4} />
        </div>
        <h1 className="text-3xl font-semibold mb-4">ربط بطاقات دفع</h1>
        <FormStage4 />
      </div>
    </div>
  );
}

export default StageFour;
