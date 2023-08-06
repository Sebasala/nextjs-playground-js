import styles from "./counterButton.module.css";

export default function CounterButton({ clicks, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Clicked {clicks} times
    </button>
  );
}
