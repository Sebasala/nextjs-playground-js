import useContentInput from "./useContentInput";
import useItemsList from "./useItemsList";

export default function useAccordion() {
  const { items, toggle, deleteItem, setItems } = useItemsList();
  const { formRef, addItem } = useContentInput(items, setItems);

  return {
    items,
    toggle,
    addItem,
    deleteItem,
    formRef,
  };
}
