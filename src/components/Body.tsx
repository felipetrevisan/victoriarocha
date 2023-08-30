"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useApp } from "@/hooks/useApp";

export function Body({ children }: { children: ReactNode }) {
  const { isMenuOpen, isInHome } = useApp();

  const classes = clsx("bg-zinc-950/90", {
    "overflow-hidden": isMenuOpen || isInHome(),
  });

  return (
    <AnimatePresence>
      <body className={classes}>{children}</body>
    </AnimatePresence>
  );
}
