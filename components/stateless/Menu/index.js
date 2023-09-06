import { layouts } from "@/constants";
import getClassNames from "classnames";
import { MenuItem } from "../MenuItem";
import { centered, menuItems, right } from "./styles.module.css";

const { LEFT } = layouts;

export default function Menu({ links, layout = LEFT }) {
  const { RIGHT, CENTERED } = layouts;
  const isCentered = layout === CENTERED;
  const isRight = layout === RIGHT;
  const listClassNames = getClassNames(menuItems, {
    [centered]: isCentered,
    [right]: isRight,
  });
  return (
    <nav>
      <ul className={listClassNames}>
        {links.map(({ id, icon, text, path }) => (
          <MenuItem key={id} icon={icon} text={text} path={path} />
        ))}
      </ul>
    </nav>
  );
}
