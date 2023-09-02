"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { ContentArea } from "@/types";

type Props = {
  location: keyof typeof ContentArea;
  size: number;
}

export function SocialNetworks({ location, size }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: [0, 1] }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
    >
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear ${location === ContentArea.avatar.toString() ? 'top-4 hover:scale-125 duration-300 ease-linear' : '' }`}
        href="https://www.instagram.com/victoriaarocha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={size} />
      </a>
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear ${location === ContentArea.avatar.toString() ? 'top-8 hover:scale-125 duration-300 ease-linear' : '' }`}
        href="http://www.facebook.com/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={size} />
      </a>
      <a
        className={`relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white ${location === ContentArea.avatar.toString() ? 'top-5 hover:scale-125 duration-300 ease-linear' : '' }`}
        href="https://www.youtube.com/user/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube size={size} />
      </a>
    </motion.div>
  );
}
