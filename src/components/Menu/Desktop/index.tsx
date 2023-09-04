"use client";

import type { MenuTypes, Section } from "@/types";
import { Item } from "../Item";

interface Props {
  sections: Section[];
  current: Section;
  type: MenuTypes;
  className?: string;
}

export function Menu({
  sections,
  current,
  type,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <nav className="flex items-center justify-between px-2 py-4">
        <ul className="flex flex-row p-4 lg:mx-auto lg:flex-row lg:p-0">
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
