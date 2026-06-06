// App.js
// import "./styles.css";
import { useState } from "react";
import postsData from "../assets/postsData.js";
import PostCard from "./PostCard";
import BlogForm from "./BlogForm.jsx";

export default function BlogPosts() {
  let [blogs, setBlogs] = useState(postsData);
  let [newBlog, setNewBlog] = useState({});

  const addBlogFunction = (blog) => {
    // console.log(blog);
    setBlogs([...blogs, blog]);
  };

  return (
    <div className="blog-container">
      <div className="write-blog">
        <h1>Write a Blog</h1>
        <BlogForm addBlog={addBlogFunction} />
      </div>

      <h2>Blog Posts</h2>

      <div className="post-container">
        {blogs.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            body={post.body}
            tags={post.tags}
            reactions={post.reactions}
            views={post.views}
          />
        ))}
      </div>
    </div>
  );
}
