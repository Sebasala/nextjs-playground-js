import { useEffect, useRef } from "react";

export default function useContentInput(items, setItems) {
  const formRef = useRef({});

  useEffect(() => {
    formRef.current.title.value = "";
    formRef.current.title.focus();
    formRef.current.content.value = "";
    formRef.current.submit.value = "Add item";
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

  return { formRef, addItem };
}
