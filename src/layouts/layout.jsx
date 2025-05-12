// src/components/Layout.js
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
