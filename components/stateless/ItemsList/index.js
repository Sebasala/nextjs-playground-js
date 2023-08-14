import AccordionItem from "@/components/stateless/AccordionItem";
import { itemsContainer } from "./itemsList.module.css";

export default function ItemsList({ items, toggle, deleteItem }) {
  return (
    <ul className={itemsContainer}>
      {items.map(({ isOpen, title, content, id }) => {
        const toggleHandler = () => toggle(id);
        const deleteHandler = () => deleteItem(id);

        return (
          <AccordionItem
            content={content}
            deleteItem={deleteHandler}
            isOpen={isOpen}
            key={id}
            title={title}
            toggle={toggleHandler}
          />
        );
      })}
    </ul>
  );
}
