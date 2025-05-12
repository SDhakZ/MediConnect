// src/components/Layout.js
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const NavLayout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NavLayout;
