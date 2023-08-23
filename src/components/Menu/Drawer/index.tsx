"use client";

import clsx from "clsx";

import { useApp } from "@/hooks/useApp";
import { Item } from "../Item";
import type { MenuTypes, Section } from "../type";
import { motion } from "framer-motion";
import { menuMobileVariants, slideUpVariants } from "@/config/animation";

interface Props {
  isOpen: boolean;
  sections: Section[];
  current: Section;
  className?: string;
  type: MenuTypes;
}

export function MenuDrawer({
  isOpen = false,
  sections,
  current,
  type,
  className = "",
}: Props) {
  const { setIsMenuOpen } = useApp();

  // fixed bottom-0 right-0 z-[1045] flex h-screen w-full max-w-full -translate-x-full flex-col border-none bg-black/95 bg-clip-padding text-neutral-700 shadow-sm outline-none backdrop-blur-2xl transition duration-300 ease-in-out dark:text-neutral-200 lg:w-72 [&[data-open]]:transform-none

  const classes = clsx(
    className,
    "flex flex-col justify-center border-none bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-open]]:transform-none",
    {
      //"invisible top-0": !isOpen,
      //"top-[var(--header-size)]": isOpen,
    }
  );

  return (
    <motion.div
      className={classes}
      data-open={isOpen}
      variants={menuMobileVariants}
      initial="closed"
      animate="open"
      exit="closed"
      custom={isOpen}
    >
      <nav
        className="flex h-full w-full max-w-full items-center justify-center px-2 py-4"
        data-type="drawer"
      >
        <ul className="flex flex-col items-center justify-between gap-5 p-4">
          {sections.map((section) => {
            return (
              <Item
                key={section.name.toLocaleLowerCase()}
                section={section}
                active={current.path === section?.path}
                type={type}
                onClick={setIsMenuOpen}
              />
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
