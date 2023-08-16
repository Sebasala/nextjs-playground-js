import { MenuItem } from "../MenuItem";
import { menuItems } from "./styles.module.css";

export default function Menu({ pages }) {
  return (
    <nav>
      <ul className={menuItems}>
        {pages.map(({ id, icon, text, path }) => (
          <MenuItem key={id} icon={icon} text={text} path={path} />
        ))}
      </ul>
    </nav>
  );
}
