"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useApp } from "@/hooks/useApp";

export function Content({ children }: { children: ReactNode }) {
  const { isInHome } = useApp();

  const classes = clsx(
    "relative z-30 h-full min-h-screen w-full border landscape:sm:border-pink-500 landscape:lg:border-yellow-500 portrait:sm:border-blue-500 portrait:lg:border-green-500 section flex lg:items-center justify-center portrait:my-16 landscape:sm:my-0 py-10 landscape:lg:my-32",
    {
      "py-0": isInHome(),
    }
  );

  return (
    <>
      <motion.main className={classes}>
        {children}
      </motion.main>
      {!isInHome() && (
        <>
          <div className="pointer-events-none fixed right-0 top-14 z-20 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
          <div className="pointer-events-none fixed bottom-14 left-0 z-20 h-[400px] w-[400px] rounded-full bg-pink-900 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
        </>
      )}
    </>
  );
}
