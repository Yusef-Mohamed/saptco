import React, { useContext } from "react";
import Stages from "../../components/Stages";
import Trip from "./components/Trip";
import { AppContext } from "../../App";

function StageTwo() {
  const { country2, country1 } = useContext(AppContext);

  return (
    <div className="bg-white">
      <div className="container max-w-[650px] mx-auto ">
        <div className="py-1 ">
          <Stages stage={2} />
        </div>
        <h1 className="text-3xl font-semibold mb-4">رحلات مطابقة للبحث</h1>
        <div>
          <Trip
            heading={`رحلة vip من ${country1} الي ${country2}`}
            price={400}
          />
          <Trip
            heading={`رحلة special vip  من ${country1} الي ${country2}`}
            price={600}
          />
        </div>
      </div>
    </div>
  );
}

export default StageTwo;
