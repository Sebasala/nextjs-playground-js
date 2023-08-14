import { contentInput, form, titleInput } from "./contentInput.module.css";

export default function ContentInput({ addItem, formRef }) {
  return (
    <form className={form} onSubmit={addItem}>
      <input
        className={titleInput}
        ref={(element) => (formRef.current.title = element)}
        type="text"
        placeholder="Title"
      />
      <textarea
        className={contentInput}
        ref={(element) => (formRef.current.content = element)}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Content"
      ></textarea>
      <input
        ref={(element) => (formRef.current.submit = element)}
        type="submit"
        defaultValue="Add item"
      />
    </form>
  );
}
