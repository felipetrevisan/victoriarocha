"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { MenuTypes, Section } from "@/types";
import { useApp } from "@/hooks/useApp";
import { menuMobileVariants } from "@/config/animation";
import { Item } from "../Item";

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
  const { toogleMenu } = useApp();

  const classes = clsx(
    className,
    "flex flex-col justify-center"
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
       <nav className="flex items-center justify-between py-4 px-2">
        <ul className="navbar flex flex-row p-4 lg:mx-auto lg:flex-row lg:p-0">
        {/* <ul className="flex flex-col items-center justify-between gap-5 p-4"> */}
          {sections.map((section) => {
            return (
              <Item
                key={section.name.toLocaleLowerCase()}
                section={section}
                active={current.path === section?.path}
                type={type}
                onClick={toogleMenu}
              />
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
