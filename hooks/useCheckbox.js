import { useState } from "react";

export default function useCheckbox(initialValue = false) {
  const [liked, setLiked] = useState(initialValue);

  const likedText = liked ? "liked" : "didn't like";

  const toggleLike = (e) => {
    setLiked(e.target.checked);
  };

  return { liked, toggleLike, likedText };
}
