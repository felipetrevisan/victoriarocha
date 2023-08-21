"use client";

import { Divider } from "@/components/Divider";
import { Home } from "@/components/Sections/Home";
import { Release } from "@/components/Sections/Release";
import { Contact } from "@/components/Sections/Contact";
import { Books } from "@/components/Sections/Books";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <motion.div
        id="home"
        className="section relative flex min-h-screen max-h-screen h-screen w-screen items-center justify-center"
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <Home />
      </motion.div>
    </>
  );
}
