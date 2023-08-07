import Image from "next/image";
import styles from "./userThumbnail.module.css";

export default function UserThumbnail({ user, onClick }) {
  return (
    <li className={styles.item}>
      <button className={styles.button} onClick={onClick}>
        <Image
          className={styles.image}
          src={user.avatar}
          width={50}
          height={50}
          alt={`${user.first_name} avatar image`}
        />
        <span>
          {user.first_name} {user.last_name}
        </span>
      </button>
    </li>
  );
}
