import useContentInput from "./useContentInput";
import useItemsList from "./useItemsList";

export default function useAccordion() {
  const { items, toggle, deleteItem, setItems } = useItemsList();
  const { titleRef, contentRef, submitRef, addItem } = useContentInput(
    items,
    setItems,
  );

  return {
    items,
    toggle,
    addItem,
    deleteItem,
    titleRef,
    contentRef,
    submitRef,
  };
}
