import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "./style/editor.css";

import axios from "axios";

const post_url = process.env.REACT_APP_BLOGS_URL;

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${post_url}/posts`, {
        title,
        desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            feture img
          </label>
          <input
            type="file"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            onEditorStateChange={onEditorStateChange}
          />

          <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            className="form-control"
            rows="10"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
