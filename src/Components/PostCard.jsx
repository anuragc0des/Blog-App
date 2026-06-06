// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard(props) {
  const deleteBlog = () => {
    props.deleteBlog(props.index);
  };

  return (
    <div className="postcard">
      <h4>{props.title}</h4>
      <p>{props.body}</p>

      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
}
