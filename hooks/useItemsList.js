import { useState } from "react";

export default function useItemsList() {
  const [items, setItems] = useState([]);

  const toggle = (id) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return { ...item, isOpen: false };
      });
    });
  };

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  return { items, toggle, deleteItem, setItems };
}
