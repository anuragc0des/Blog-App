// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard(props) {
  return (
    <div className="postcard">
      <h4>{props.title}</h4>
      <p>{props.body}</p>

      <div className="hashtags">
        {props.tags.map((tag, index) => (
          <p key={index}>#{tag} </p>
        ))}
      </div>

      <div className="reactions">
        <p>👍 {props.reactions.likes}</p>
        <p>👎 {props.reactions.dislikes}</p>
        <p>👁️ {props.views} views</p>
      </div>
    </div>
  );
}
