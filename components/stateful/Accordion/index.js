"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./accordion.module.css";

export default function Accordion() {
  const [items, setItems] = useState([]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

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

  useEffect(() => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <button onClick={() => toggle(item.id)}>
                <h2>{item.title}</h2>
              </button>
              <p className={!item.isOpen ? styles.isClosed : undefined}>
                {item.content}
              </p>
            </li>
          );
        })}
      </ul>
      <form onSubmit={addItem}>
        <input ref={titleRef} type="text" placeholder="Title" />
        <textarea
          ref={contentRef}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Content"
        ></textarea>
        <input type="submit" defaultValue="Add item" />
      </form>
    </div>
  );
}
