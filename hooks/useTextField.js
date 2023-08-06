import { useState } from "react";

export default function useTextField() {
  const [text, setText] = useState("hello");

  const updateText = (event) => {
    setText(event.target.value);
  };

  const resetText = () => {
    setText("hello");
  };

  return {
    text,
    updateText,
    resetText,
  };
}
