import { FaHome, FaReact, FaUsers, FaUsersCog } from "react-icons/fa";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";

export const pages = [
  {
    id: 0,
    text: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    id: 1,
    text: "Hooks examples",
    path: "/hooks-examples",
    icon: <FaReact />,
  },
  {
    id: 2,
    text: "Users",
    path: "/users",
    icon: <FaUsers />,
  },
  {
    id: 3,
    text: "Users (SSR)",
    path: "/users-ssr",
    icon: <FaUsersCog />,
  },
  {
    id: 4,
    text: "Accordion",
    path: "/accordion",
    icon: <TfiLayoutAccordionSeparated />,
  },
];

export const endpoints = {
  users: "https://random-data-api.com/api/v2/users?size=5users",
};
