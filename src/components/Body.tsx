"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/hooks/useApp";

export function Body({ children }: { children: ReactNode }) {
  const { isMenuOpen, isInHome } = useApp();

  // const classes = clsx("bg-zinc-950/90", {
  //   "overflow-hidden": isMenuOpen || isInHome(),
  // });

  return (
    <AnimatePresence>
      <motion.body animate={{ opacity: 1 }} initial={{ opacity: 0 }}>{children}</motion.body>
    </AnimatePresence>
  );
}
