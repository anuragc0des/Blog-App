// App.js
// import "./styles.css";
import postsData from "../assets/postsData.js";
import PostCard from "./PostCard";

export default function BlogPosts() {
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>

      <div className="post-container">
        {postsData.map((post, index) => (
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
