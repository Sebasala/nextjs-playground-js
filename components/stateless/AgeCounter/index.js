import Button from "@/components/stateless/Button";

export default function AgeCounter({ age, incrementAge, decrementAge }) {
  return (
    <div>
      <Button onClick={decrementAge} label="- Age" />
      <Button onClick={incrementAge} label="+ Age" />
      <p>Hello you are {age}</p>
    </div>
  );
}
