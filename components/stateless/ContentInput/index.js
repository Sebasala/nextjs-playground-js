import { contentInput, form, titleInput } from "./contentInput.module.css";

export default function ContentInput({
  addItem,
  titleRef,
  contentRef,
  submitRef,
}) {
  return (
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
  );
}
