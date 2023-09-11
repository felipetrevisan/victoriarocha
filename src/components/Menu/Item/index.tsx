"use client";

import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { MenuTypes } from "@/types";

type Props = {
  label: string;
  active: boolean;
  type: MenuTypes;
  className?: string;
} & LinkProps;

export function Item({
  label,
  type,
  active = false,
  className,
  href,
  ...rest
}: Props) {
  const classesMenu = clsx(
    "text-white hover:after:left-0 hover:after-right-auto hover:after:w-full after:transition-all after:absolute after:left-auto after:right-0 after:-bottom-8 after:h-[0.20rem] after:w-0 after:bg-border relative inline-block px-1 uppercase",
    {
      "after:left-0 after-right-auto after:w-full text-purple-300 pointer-events-none":
        active,
    }
  );

  return (
    <li className={className}>
      <Link {...rest} href={href} className={classesMenu} scroll>
        <span className="relative z-50 text-sm font-semibold lg:z-0 lg:text-base">
          {label}
        </span>
      </Link>
    </li>
  );
}
