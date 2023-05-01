"use client";

import clsx from "clsx";
import { Item } from "../Item";
import type { Section } from "../type";

interface Props {
  isOpen: boolean;
  sections: Section[];
  current: Section;
};

export function MenuDrawer({
  isOpen = false,
  sections,
  current,
}: Props) {
  const menuIsOpen = clsx({
    invisible: !isOpen,
  });

  return (
    <div
      className={`${menuIsOpen} h-screen bg-black/90 backdrop-blur-2xl fixed bottom-0 right-0 top-0 z-[1045] flex w-72 max-w-full -translate-x-full flex-col border-non bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:text-neutral-200 [&[data-open]]:transform-none`}
      data-open={isOpen}
    >
      <nav
        className="flex items-center justify-center py-4 px-2 w-72 max-w-full h-full"
        data-type="drawer"
      >
        <ul className="flex flex-col items-center justify-between p-4 gap-3">
          {sections.map((section) => {
            return (
              <Item
                key={section.name.toLocaleLowerCase()}
                section={section}
                active={current.path === section.path}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
