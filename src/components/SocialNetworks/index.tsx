"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { ContentArea } from "@/types";

type Props = {
  location: keyof typeof ContentArea;
  size: number;
};

export function SocialNetworks({ location, size }: Props) {
  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear ${
          location === ContentArea.avatar.toString()
            ? "top-4 duration-300 ease-linear hover:scale-125"
            : ""
        }`}
        href="https://www.instagram.com/victoriaarocha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={size} />
      </a>
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear ${
          location === ContentArea.avatar.toString()
            ? "top-8 duration-300 ease-linear hover:scale-125"
            : ""
        }`}
        href="http://www.facebook.com/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={size} />
      </a>
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white ${
          location === ContentArea.avatar.toString()
            ? "top-5 duration-300 ease-linear hover:scale-125"
            : ""
        }`}
        href="https://www.youtube.com/user/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube size={size} />
      </a>
    </motion.div>
  );
}
