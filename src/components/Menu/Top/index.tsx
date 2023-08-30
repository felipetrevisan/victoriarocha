"use client";

import { Item } from "../Item";
import type { MenuTypes, Section } from "../type";

interface Props {
  sections: Section[];
  current: Section;
  type: MenuTypes;
  className?: string;
};

export function MenuTop({ sections, current, type, className = "" }: Props) {
  return (
    <div className={className}>
      <nav className="flex items-center justify-between py-4 px-2">
        <ul className="navbar flex flex-col p-4 wide:mx-auto wide:flex-row wide:p-0">
          {sections.map((section) => {
            return (
              <Item
                key={section.name.toLocaleLowerCase()}
                section={section}
                active={current.path === section.path}
                className="px-2"
                type={type}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
