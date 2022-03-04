import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaUser } from "react-icons/fa";

const UsersNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Link
        className={toggle ? `nav-link` : `nav-link collapsed`}
        to="#"
        data-bs-toggle="collapse"
        aria-expanded={toggle}
        aria-controls="collapseLayouts"
        onClick={handleToggle}
      >
        <div className="sb-nav-link-icon">
          <FaUser />
        </div>
        Users
        <div className="sb-sidenav-collapse-arrow">
          <FaAngleDown />
        </div>
      </Link>
      <div
        className={toggle ? "collapse show" : "collapse"}
        id="collapseLayouts"
        aria-labelledby="headingOne"
        data-bs-parent="#sidenavAccordion"
      >
        <nav className="sb-sidenav-menu-nested nav">
          <Link className="nav-link" to="/admin/users/all-users">
            All Users
          </Link>
          <Link className="nav-link" to="/admin/users/add-new">
            Add New
          </Link>
          <Link className="nav-link" to="/admin/users/profile">
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
};

export default UsersNav;
