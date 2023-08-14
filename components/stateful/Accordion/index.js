"use client";
import { useEffect, useRef, useState } from "react";
import {
  container,
  contentInput,
  form,
  isClosed,
  itemContent,
  itemContentContainer,
  itemTitle,
  itemsContainer,
  titleInput,
  toggleButton,
} from "./accordion.module.css";

export default function Accordion() {
  const [items, setItems] = useState([]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const submitRef = useRef(null);

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

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    titleRef.current.value = "";
    contentRef.current.value = "";
    submitRef.current.value = "Add item";
  }, [items]);

  return (
    <div className={container}>
      <ul className={itemsContainer}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <h2 className={itemTitle}>
                <button
                  className={toggleButton}
                  onClick={() => toggle(item.id)}
                  type="button"
                >
                  {item.title}
                </button>
              </h2>
              <div
                className={`${
                  !item.isOpen ? isClosed + " " : ""
                }${itemContentContainer}`}
              >
                <p className={itemContent}>{item.content}</p>
                <button type="button" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <form className={form} onSubmit={addItem}>
        <input
          className={titleInput}
          ref={titleRef}
          type="text"
          placeholder="Title"
        />
        <textarea
          className={contentInput}
          ref={contentRef}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Content"
        ></textarea>
        <input ref={submitRef} type="submit" defaultValue="Add item" />
      </form>
    </div>
  );
}
