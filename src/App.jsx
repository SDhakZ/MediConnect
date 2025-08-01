import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { config } from "@fortawesome/fontawesome-svg-core";
import Landing from "./pages/landing";
import NavLayout from "./layouts/layout";
import Services from "./pages/services";
import ContactUs from "./pages/components/contactUs";
import AboutUs from "./pages/aboutUs";
import ProgramSectors from "./pages/programSectors";
import NotFound from "./NotFound";
config.autoAddCss = false;
import "./index.css";
function App() {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/program-sectors/:category" element={<ProgramSectors />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
