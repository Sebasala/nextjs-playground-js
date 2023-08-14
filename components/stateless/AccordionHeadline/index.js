import { itemTitle, toggleButton } from "./accordionHeadline.module.css";

export default function AccordionHeadline({ title, onClick }) {
  return (
    <h2 className={itemTitle}>
      <button className={toggleButton} onClick={onClick} type="button">
        {title}
      </button>
    </h2>
  );
}
