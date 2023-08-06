import TextFieldProvider from "@/components/stateful/TextFieldProvider";
import Section from "@/components/stateless/Section";

export default function TextFieldSection() {
  return (
    <Section title="Text field example">
      <TextFieldProvider />
    </Section>
  );
}
