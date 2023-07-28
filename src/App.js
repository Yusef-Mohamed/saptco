import { Route, Routes } from "react-router";

import Home from "./pages/home/Home";
import "./App.css";
import "./all.min.css";
import StageTwo from "./pages/stage-2/StageTwo";
import StageThree from "./pages/stage-3/StageThree";
import StageFour from "./pages/stage-4/StageFour";
import VerificationCode from "./pages/verification/VerificationCode";
import VerificationCode2 from "./pages/verification2/VerificationCode2";
import PhoneNum from "./pages/phoneNum/phoneNum";
import Login from "./pages/login/Login";
import Secured from "./pages/secured/Secured";
import LayOut from "./LayOut";
import PhoneNumber from "./pages/phoneNumber/PhoneNumber";
import PhonePass from "./pages/phonepass/PhonePass";
import { createContext, useState } from "react";
export const AppContext = createContext();

export default function App() {
  const [country1, setCountry1] = useState({});
  const [country2, setCountry2] = useState({});
  console.log(country1);
  console.log(country2);
  return (
    <AppContext.Provider
      value={{ country1, setCountry1, country2, setCountry2 }}
    >
      <Routes>
        <Route element={<LayOut />}>
          <Route path="" element={<Home />} />
          <Route path="/stage-2" element={<StageTwo />} />
          <Route path="/stage-3" element={<StageThree />} />
          <Route path="/stage-4" element={<StageFour />} />
          <Route path="/verificationCode" element={<VerificationCode />} />
          <Route path="/verificationCode2" element={<VerificationCode2 />} />
          <Route path="/phone-number" element={<PhoneNum />} />
        </Route>

        <Route path="/temporaryPass" element={<PhonePass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/secured" element={<Secured />} />
        <Route path="/phonenumber" element={<PhoneNumber />} />
      </Routes>
    </AppContext.Provider>
  );
}
