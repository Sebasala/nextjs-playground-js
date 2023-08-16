import Link from "next/link";
import { iconContainer, link, textContainer } from "./styles.module.css";

export function MenuItem({ icon, text, path }) {
  return (
    <li>
      <Link className={link} href={path}>
        <span className={iconContainer}>{icon}</span>
        <span className={textContainer}>{text}</span>
      </Link>
    </li>
  );
}
