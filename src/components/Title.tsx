"use client";

import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { useApp } from "@/hooks/useApp";
import { pageTitleVariants } from "@/config/animation";

const oswald = Oswald({ subsets: ["latin"] });

type Props = {
  content: string;
};

export function Title({ content }: Props) {
  const { isMenuOpen, currentSection } = useApp();

  return (
    <motion.h1
      className={`${oswald.className} relative mb-12 w-max pb-4 text-3xl md:text-4xl lg:text-4xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-divider`}
      custom={currentSection.path === "/release" ? false : isMenuOpen}
      animate="visible"
      variants={pageTitleVariants}
    >
      {content}
    </motion.h1>
  );
}
