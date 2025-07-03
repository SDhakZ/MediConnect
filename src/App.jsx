import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { config } from "@fortawesome/fontawesome-svg-core";
import Landing from "./pages/landing";
import NavLayout from "./layouts/layout";
import Services from "./pages/services";
import ContactUs from "./pages/components/contactUs";
config.autoAddCss = false;
import "./index.css";
function App() {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
