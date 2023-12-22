import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { GiCrossedSwords, GiQuillInk, GiBookCover } from "react-icons/gi";
import { RiAliensLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";

import Home from "views/Home";
import Fantasy from "views/Fantasy";
import Literature from "views/Literature";
import Poetry from "views/Poetry";
import Novel from "views/Novel";
import Fiction from "views/Fiction";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: Home,
  },
  {
    name: "Literature",
    layout: "/admin",
    path: "/literature",
    icon: (
      <Icon as={FaGraduationCap} width="20px" height="20px" color="inherit" />
    ),
    component: Literature,
  },
  {
    name: "Poetry",
    layout: "/admin",
    path: "/poetry",
    icon: <Icon as={GiQuillInk} width="20px" height="20px" color="inherit" />,
    component: Poetry,
  },
  {
    name: "Novel",
    layout: "/admin",
    path: "/novel",
    icon: <Icon as={GiBookCover} width="20px" height="20px" color="inherit" />,
    component: Novel,
  },
  {
    name: "Fiction",
    layout: "/admin",
    path: "/fiction",
    icon: <Icon as={RiAliensLine} width="20px" height="20px" color="inherit" />,
    component: Fiction,
  },
  {
    name: "Fantasy",
    layout: "/admin",
    path: "/fantasy",
    icon: (
      <Icon as={GiCrossedSwords} width="20px" height="20px" color="inherit" />
    ),
    component: Fantasy,
  },
];

export default routes;
