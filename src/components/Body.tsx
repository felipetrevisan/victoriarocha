"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Body({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.body animate={{ opacity: 1 }} initial={{ opacity: 0 }}>{children}</motion.body>
    </AnimatePresence>
  );
}
