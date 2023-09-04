"use client";

import clsx from "clsx";
import Link from "next/link";
import { MenuTypes, Section } from "@/types";

type Props = {
  section: Section;
  active: boolean;
  className?: string;
  type: MenuTypes;
  onClick?: () => void;
};

export function Item({
  section: { label, path },
  type,
  active = false,
  className = "",
  onClick,
}: Props) {
  const classesMenu = clsx(
    "text-white hover:after:left-0 hover:after-right-auto hover:after:w-full after:transition-all after:absolute after:left-auto after:right-0 after:-bottom-8 after:h-[0.20rem] after:w-0 after:bg-border relative inline-block px-1 uppercase",
    {
      "after:left-0 after-right-auto after:w-full text-purple-300": active,
    }
  );

  return (
    <li className={className}>
      <Link href={path} className={classesMenu} onClick={onClick}>
        <span className="relative z-50 text-sm font-semibold lg:z-0 lg:text-base">
          {label}
        </span>
      </Link>
    </li>
  );
}
