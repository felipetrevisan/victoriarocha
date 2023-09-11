"use client";

import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

type Props = {
  content: string;
};

export function Title({ content }: Props) {
  return (
    <motion.h1
      className={`${oswald.className} relative mb-12 w-max pb-4 text-3xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-divider md:text-4xl lg:text-4xl`}
    >
      {content}
    </motion.h1>
  );
}
