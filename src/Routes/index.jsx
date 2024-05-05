import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Container/Pages/Home";
import Services from "../Container/Pages/Services";
import About from "../Container/Pages/About";
import GeneralLayout from "../Container/Layouts/GeneralLayout";

export default function AllRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeneralLayout/>}>
            {/* <Route path="services" element={<Services />} /> */}
            {/* <Route path="about" element={<About />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }