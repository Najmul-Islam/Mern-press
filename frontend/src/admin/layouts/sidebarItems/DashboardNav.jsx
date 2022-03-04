import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
const DashboardNav = () => {
  return (
    <Link className="nav-link mb-3" to="/admin">
      <div className="sb-nav-link-icon">
        <FaTachometerAlt />
      </div>
      Dashboard
    </Link>
  );
};

export default DashboardNav;
