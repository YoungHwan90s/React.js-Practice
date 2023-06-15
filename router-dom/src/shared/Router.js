import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import WorkDetail from "../pages/WorkDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
