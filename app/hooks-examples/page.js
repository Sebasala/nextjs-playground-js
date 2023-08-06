import AgeSection from "@/components/stateless/AgeSection";
import IndependentCountersSection from "@/components/stateless/IndependentCountersSection";
import LikeSection from "@/components/stateless/LikeSection";
import SyncedCountersSection from "@/components/stateless/SyncedCountersSection";
import TextFieldSection from "@/components/stateless/TextFieldSection";

export const metadata = {
  title: "React Hooks Examples",
  description: "Examples using React Hooks in different ways",
};

const HooksExamples = () => {
  return (
    <main>
      <h1>React Hooks Examples</h1>
      <IndependentCountersSection />
      <SyncedCountersSection />
      <TextFieldSection />
      <LikeSection />
      <AgeSection />
    </main>
  );
};
export default HooksExamples;
