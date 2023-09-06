import { FaHome, FaReact, FaUsers, FaUsersCog } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";
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
  {
    id: 5,
    text: "Movies",
    path: "/movies",
    icon: <SiThemoviedatabase />,
  },
];

export const endpoints = {
  users: "https://random-data-api.com/api/v2/users?size=5users",
  tmdb: `https://api.themoviedb.org/3/movie/top_rated`,
};

export const layouts = {
  CENTERED: "centered",
  LEFT: "left",
  RIGHT: "right",
};

export const movieGenres = [
  {
    id: 0,
    text: "Trending",
    path: "?filter=trending",
  },
  {
    id: 1,
    text: "Top Rated",
    path: "?filter=topRated",
  },
];
