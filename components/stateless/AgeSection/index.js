import AgeCounterProvider from "@/components/stateful/AgeCounterProvider";
import Section from "@/components/stateless/Section";

export default function AgeSection() {
  return (
    <Section title="Age reducer counter example">
      <AgeCounterProvider />
    </Section>
  );
}
