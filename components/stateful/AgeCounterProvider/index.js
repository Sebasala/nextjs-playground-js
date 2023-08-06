"use client";
import useReducerCounter from "@/hooks/useReducerCounter";
import AgeCounter from "../../stateless/AgeCounter";

export default function AgeCounterProvider() {
  const { counter, increaseCounter, decreaseCounter } = useReducerCounter();

  return (
    <AgeCounter
      age={counter}
      incrementAge={increaseCounter}
      decrementAge={decreaseCounter}
    />
  );
}
