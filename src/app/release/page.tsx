"use client";

import { motion } from "framer-motion";
import { Release as Content } from "@/components/Sections/Release";

export default function Release() {
  return (
    <motion.section
      id="release"
      className="section relative flex h-screen min-h-screen w-screen items-center justify-center my-72 px-10 md:my-72 lg:my-32"
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <Content />
    </motion.section>
  );
}
