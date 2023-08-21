"use client";

import { Contact as Content } from "@/components/Sections/Contact";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section relative flex h-screen min-h-screen w-screen items-center justify-center my-32 px-10 md:my-20 lg:my-20"
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <Content />
    </motion.section>
  );
}
