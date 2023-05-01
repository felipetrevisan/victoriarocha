"use client";

import { Item } from "../Item";
import type { Section } from "../type";

interface Props {
  sections: Section[];
  current: Section;
};

export function MenuTop({ sections, current }: Props) {
  return (
    <div>
      <nav className="flex items-center justify-between py-4 px-2">
        <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
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
