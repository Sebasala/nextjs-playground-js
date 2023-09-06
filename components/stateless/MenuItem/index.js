"use client";
import getClassNames from "classnames";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  currentStyles,
  hideOnMobile,
  iconContainer,
  link,
} from "./styles.module.css";

export function MenuItem({ icon, text, path }) {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const isCurrent = path === `?filter=${filter}`;
  const linkClassNames = getClassNames(link, { [currentStyles]: isCurrent });
  const textClassNames = getClassNames({
    [hideOnMobile]: icon,
  });
  return (
    <li>
      <Link className={linkClassNames} href={path}>
        {icon && <span className={iconContainer}>{icon}</span>}
        <span className={textClassNames}>{text}</span>
      </Link>
    </li>
  );
}
