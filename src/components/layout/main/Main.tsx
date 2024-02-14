import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/AboutMain";
import Events from "../../pages/events/Events";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};
