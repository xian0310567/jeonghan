import React from "react";

import { MenuListCallback } from "./lib/useMenuList";

const useMenuList = (): MenuListCallback[] => {
  const items: MenuListCallback[] = [
    {
      key: 1,
      label: "Home",
      url: "/",
    },
    {
      key: 2,
      label: "Blog",
      url: "/blog",
    },
    {
      key: 3,
      label: "About",
      url: "/about",
    },
  ];

  return items;
};

export default useMenuList;
