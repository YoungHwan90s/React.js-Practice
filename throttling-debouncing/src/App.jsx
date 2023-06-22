import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Lodash from "./pages/Lodash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/lodash" element={<Lodash />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
