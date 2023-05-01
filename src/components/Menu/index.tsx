"use client";

import { useApp } from "@/hooks/useApp";
import { MenuDrawer } from "./Drawer";
import { MenuTop } from "./Top";
import { MenuTypes } from "./type";

type Props = {
  type: MenuTypes;
  isOpen?: boolean;
};

export function Menu({ type = MenuTypes.drawer, isOpen = false }: Props) {
  const { currentSection, sections } = useApp();

  return (
    <>
      {type === MenuTypes.drawer ? (
        <MenuDrawer
          isOpen={isOpen}
          current={currentSection}
          sections={sections}
        />
      ) : (
        <MenuTop current={currentSection} sections={sections} />
      )}
    </>
  );
}
