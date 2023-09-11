"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useApp } from "@/hooks/useApp";

export function Content({ children }: { children: ReactNode }) {
  const { isInHome } = useApp();

  const classes = clsx(
    "relative z-30 h-full section flex portrait:md:items-center lg:items-center justify-center",
    {
      "py-0": isInHome(),
      "sm:landscape:my-0 lg:landscape:mt-32 lg:landscape:mb-24 py-10 portrait:my-16 xl:landscape:mt-32 xl:landscape:mb-24 xl:py-0 portrait:lg:h-[calc(100vh-23vh)] 2xl:h-[calc(100vh-23vh)]": !isInHome(),
    }
  );

  return (
    <>
      <motion.main className={classes}>{children}</motion.main>
      {!isInHome() && (
        <>
          <div className="pointer-events-none fixed right-0 top-14 z-20 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
          <div className="pointer-events-none fixed bottom-14 left-0 z-20 h-[400px] w-[400px] rounded-full bg-pink-900 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
        </>
      )}
    </>
  );
}
