import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
import "./all.min.css";
import StageTwo from "./pages/stage-2/StageTwo";
import StageThree from "./pages/stage-3/StageThree";
import StageFour from "./pages/stage-4/StageFour";
import VerificationCode from "./pages/verification/VerificationCode";
import VerificationCode2 from "./pages/verification2/VerificationCode2";
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/stage-2" element={<StageTwo />} />
        <Route path="/stage-3" element={<StageThree />} />
        <Route path="/stage-4" element={<StageFour />} />
        <Route path="/verificationCode" element={<VerificationCode />} />
        <Route path="/verificationCode2" element={<VerificationCode2 />} />
      </Routes>
      <Footer />
    </>
  );
}
