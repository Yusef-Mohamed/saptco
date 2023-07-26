import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
