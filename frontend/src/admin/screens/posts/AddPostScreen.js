import React from "react";
import AddPost from "../../components/post/AddPost";

const AddPostScreen = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <AddPost />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AddPostScreen;
