import { useEffect, useRef } from "react";

export default function useContentInput(items, setItems) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    titleRef.current.value = "";
    titleRef.current.focus();
    contentRef.current.value = "";
    submitRef.current.value = "Add item";
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    setItems((items) => {
      return [
        ...items,
        {
          id: items.length + 1,
          title: e.target[0].value,
          content: e.target[1].value,
          isOpen: false,
        },
      ];
    });
  };

  return { titleRef, contentRef, submitRef, addItem };
}
