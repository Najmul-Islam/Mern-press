import React from "react";
import { Link } from "react-router-dom";
import { FaCommentAlt } from "react-icons/fa";

const CommentsNav = () => {
  return (
    <Link className="nav-link mb-3" to="/admin/comments">
      <div className="sb-nav-link-icon">
        <FaCommentAlt />
      </div>
      Comments
    </Link>
  );
};

export default CommentsNav;
