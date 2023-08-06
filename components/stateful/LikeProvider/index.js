"use client";
import useCheckbox from "@/hooks/useCheckbox";
import Like from "@/components/stateless/Like";

export default function LikeProvider() {
  const { liked, toggleLike, likedText } = useCheckbox();

  return <Like liked={liked} toggleLike={toggleLike} likedText={likedText} />;
}
