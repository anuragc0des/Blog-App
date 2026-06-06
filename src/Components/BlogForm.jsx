import { useState } from "react";
import React from "react";

const BlogForm = (props) => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    // console.log(e.target.value);
  };

  const addBlog = () => {
    props.addBlog({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="create-blog">
      <div className="blog-fields">
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          className="blog-title"
          onChange={handleTitle}
        />
      </div>
      <textarea
        name="blog-content"
        value={body}
        className="blog-body"
        onChange={handleBody}
      ></textarea>
      <button onClick={addBlog}>Add</button>
    </div>
  );
};

export default BlogForm;
