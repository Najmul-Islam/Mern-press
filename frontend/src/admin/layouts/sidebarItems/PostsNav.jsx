import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaThumbtack, FaAngleDown } from "react-icons/fa";

// let useClickOutSide = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.cotains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);
//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return domNode;
// };

const PostsNav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef();

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (
  //       toggle &&
  //       toggleRef.current &&
  //       !toggleRef.current.contains(e.target)
  //     ) {
  //       setToggle(false);
  //     }
  //   };
  //   document.addEventListener("click", checkIfClickedOutside);

  //   return () => document.removeEventListener("click", checkIfClickedOutside);
  // }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // let domNode = useClickOutSide(() => {
  //   setToggle(false);
  // });

  return (
    <>
      <Link
        className={toggle ? `nav-link` : `nav-link collapsed`}
        to="#"
        data-bs-toggle="collapse"
        aria-expanded={toggle}
        aria-controls="collapseLayouts"
        ref={toggleRef}
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
