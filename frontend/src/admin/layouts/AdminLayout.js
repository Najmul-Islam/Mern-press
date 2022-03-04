import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./css/styles.css";

const AdminLayout = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarToggle(!navbarToggle);
  };
  return (
    <div
      className={
        navbarToggle ? `sb-nav-fixed sb-sidenav-toggled` : `sb-nav-fixed`
      }
    >
      <Navbar handleNavbarToggle={handleNavbarToggle} />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
