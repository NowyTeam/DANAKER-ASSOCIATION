import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/AboutMain";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
