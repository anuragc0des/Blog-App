// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard(props) {
  return (
    <div className="postcard">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}
