import {
  isClosed,
  itemContent,
  itemContentContainer,
} from "./accordionContent.module.css";

export default function AccordionContent({ content, isOpen, deleteItem }) {
  return (
    <div className={`${!isOpen ? isClosed + " " : ""}${itemContentContainer}`}>
      <p className={itemContent}>{content}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
}
