import LikeProvider from "@/components/stateful/LikeProvider";
import Section from "@/components/stateless/Section";

export default function LikeSection() {
  return (
    <Section title="Like checkbox example">
      <LikeProvider />
    </Section>
  );
}
