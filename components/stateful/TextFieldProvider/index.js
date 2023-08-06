"use client";
import useTextField from "@/hooks/useTextField";
import InputTracker from "@/components/stateless/InputTracker";

export default function TextFieldProvider() {
  const { text, updateText, resetText } = useTextField();

  return (
    <InputTracker text={text} updateText={updateText} resetText={resetText} />
  );
}
