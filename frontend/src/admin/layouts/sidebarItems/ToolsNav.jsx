import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaWrench } from "react-icons/fa";

const ToolsNav = () => {
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
          <FaWrench />
        </div>
        Tools
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
          <Link className="nav-link" to="layout-static.html">
            Static Navigation
          </Link>
          <Link className="nav-link" to="layout-sidenav-light.html">
            Light Sidenav
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ToolsNav;
