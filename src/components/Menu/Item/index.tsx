"use client";

import clsx from "clsx";
import Link from "next/link";
import { MenuTypes, Section } from "../type";

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
  onClick
}: Props) {
  const classesMenu = clsx('text-white', {
    "after:left-0 after-right-auto after:w-full text-purple-300":
      active && type === MenuTypes.top,
    "hover:animate-pulse": !active && type === MenuTypes.drawer,
    "hover:after:left-0 hover:after-right-auto hover:after:w-full after:transition-all after:absolute after:left-auto after:right-0 after:-bottom-8 after:h-[0.20rem] after:w-0 after:bg-border relative inline-block px-1 uppercase":
      type === MenuTypes.top,
    "relative hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-border hover:relative hover:inline-block":
      type === MenuTypes.drawer,
    "relative before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-border relative inline-block":
      active && type === MenuTypes.drawer,
  });

  return (
    <li className={className}>
      <Link href={path} className={classesMenu} onClick={onClick}>
        <span className="relative z-50 wide:z-0 text-3xl wide:text-base font-semibold">{label}</span>
      </Link>
    </li>
  );
}
