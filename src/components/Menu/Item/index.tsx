"use client";

import { useApp } from "@/hooks/useApp";
import clsx from "clsx";
import Link from "next/link";
import { Section } from "../type";

type Props = {
  section: Section;
  active: boolean;
};

export function Item({ section: { name, path }, active = false }: Props) {
  const classes = clsx({
    'active': active
  });

  return (
    <li>
      <Link href={path} className={classes}>
        <span>{name}</span>
      </Link>
    </li>
  );
}
