"use client";

import { motion } from "framer-motion";
import { Release as Content } from "@/components/Sections/Release";

export default function Release() {
  return (
    <motion.section id="release" initial="hide" whileInView="show" exit="hide">
      <Content />
    </motion.section>
  );
}
