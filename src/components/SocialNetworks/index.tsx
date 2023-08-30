"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export function SocialNetworks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: [0, 1] }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
    >
      <a
        className="relative top-4 mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
        href="https://www.instagram.com/victoriarocha.oficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={18} />
      </a>
      <a
        className="relative top-8 mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
        href="http://www.facebook.com/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={18} />
      </a>
      <a
        className="relative top-5 mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
        href="https://www.youtube.com/user/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube size={18} />
      </a>
    </motion.div>
  );
}
