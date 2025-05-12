import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { config } from "@fortawesome/fontawesome-svg-core";
import Landing from "./pages/landing";
import NavLayout from "./layouts/layout";
config.autoAddCss = false;
import "./index.css";
function App() {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
