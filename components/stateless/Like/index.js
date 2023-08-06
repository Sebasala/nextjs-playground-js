export default function Like({ liked, toggleLike, likedText }) {
  return (
    <div>
      <p>
        <input type="checkbox" checked={liked} onChange={toggleLike} />I liked
        this
      </p>
      <p>You {likedText} this.</p>
    </div>
  );
}
