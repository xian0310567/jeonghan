import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { MenuListCallback } from "@/hooks/statics/useMenuList";

const Menu = styled.li`
  font-weight: bold;
  font-size: 16px;
  margin-right: 30px;
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  display: flex;
`;

const HeaderMenu = ({ items }: { items: MenuListCallback[] }) => {
  const router = useRouter();

  return (
    <MenuContainer>
      {items.map((item) => (
        <Menu
          key={item.key}
          onClick={() => {
            router.push(item.url);
          }}
        >
          <span>{item.label}</span>
        </Menu>
      ))}
    </MenuContainer>
  );
};

export default HeaderMenu;
