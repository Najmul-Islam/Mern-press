import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

const Navbar = ({ handleNavbarToggle }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand ps-3" to="index.html">
        Start Bootstrap
      </Link>

      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        onClick={handleNavbarToggle}
      >
        <FaBars />
      </button>

      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <Link
            className={
              toggle
                ? `nav-link dropdown-toggle show`
                : `nav-link dropdown-toggle`
            }
            id="navbarDropdown"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
          >
            <FaUser />
          </Link>
          <ul
            className={
              toggle
                ? `dropdown-menu dropdown-menu-end show`
                : `dropdown-menu dropdown-menu-end`
            }
            aria-labelledby="navbarDropdown"
            data-bs-popper={toggle ? "none" : ""}
          >
            <li>
              <Link className="dropdown-item" to="#!">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#!">
                Activity Log
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#!">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
