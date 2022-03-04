import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaThumbtack, FaAngleDown } from "react-icons/fa";

const PostsNav = () => {
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
          <FaThumbtack />
        </div>
        Posts
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
          <Link className="nav-link" to="/admin/post/all-posts">
            All Posts
          </Link>
          <Link className="nav-link" to="/admin/post/add-new">
            Add New
          </Link>
          <Link className="nav-link" to="/admin/post/categories">
            Categories
          </Link>
          <Link className="nav-link" to="/admin/post/tags">
            Tags
          </Link>
        </nav>
      </div>
    </>
  );
};

export default PostsNav;
