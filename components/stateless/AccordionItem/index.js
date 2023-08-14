import AccordionContent from "@/components/stateless/AccordionContent";
import AccordionHeadline from "@/components/stateless/AccordionHeadline";

export default function AccordionItem({
  isOpen,
  title,
  content,
  toggle,
  deleteItem,
}) {
  return (
    <li>
      <AccordionHeadline title={title} onClick={toggle} />
      <AccordionContent
        content={content}
        deleteItem={deleteItem}
        isOpen={isOpen}
      />
    </li>
  );
}
