"use client";
import ContentInput from "@/components/stateless/ContentInput";
import ItemsList from "@/components/stateless/ItemsList";
import useAccordion from "@/hooks/useAccordion";
import { container } from "./accordion.module.css";

export default function Accordion() {
  const {
    addItem,
    contentRef,
    deleteItem,
    items,
    submitRef,
    titleRef,
    toggle,
  } = useAccordion();

  return (
    <div className={container}>
      <ItemsList items={items} toggle={toggle} deleteItem={deleteItem} />
      <ContentInput
        addItem={addItem}
        contentRef={contentRef}
        submitRef={submitRef}
        titleRef={titleRef}
      />
    </div>
  );
}
