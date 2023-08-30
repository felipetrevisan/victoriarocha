"use client";

import { motion } from "framer-motion";
import { Contact as Content } from "@/components/Sections/Contact";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section relative my-32 flex wide:items-center justify-center"
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <Content />
    </motion.section>
  );
}
