"use client";

import { useApp } from "@/hooks/useApp";
import { MenuDrawer } from "./Drawer";
import { MenuTop } from "./Top";
import { MenuTypes } from "./type";

type Props = {
  isOpen?: boolean;
};

export function Menu({ isOpen = false }: Props) {
  const { currentSection, sections } = useApp();

  return (
    <>
      <MenuDrawer
        isOpen={isOpen}
        current={currentSection}
        sections={sections}
        className="inline-flex lg:hidden"
        type={MenuTypes.drawer}
      />
      <MenuTop current={currentSection} sections={sections} type={MenuTypes.top} className="hidden lg:inline-flex" />
    </>
  );
}
