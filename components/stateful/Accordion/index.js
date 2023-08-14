"use client";
import ContentInput from "@/components/stateless/ContentInput";
import ItemsList from "@/components/stateless/ItemsList";
import useAccordion from "@/hooks/useAccordion";
import { container } from "./accordion.module.css";

export default function Accordion() {
  const { addItem, deleteItem, items, toggle, formRef } = useAccordion();

  return (
    <div className={container}>
      <ItemsList items={items} toggle={toggle} deleteItem={deleteItem} />
      <ContentInput addItem={addItem} formRef={formRef} />
    </div>
  );
}
