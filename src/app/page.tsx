"use client";

import { motion } from "framer-motion";
import { Home } from "@/components/Sections/Home";

export default function App() {
  return (
    <motion.div
      id="home"
      className="section relative flex h-screen max-h-screen min-h-screen w-screen items-center justify-center"
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <Home />
    </motion.div>
  );
}
