"use client";

import { motion } from "framer-motion";
import { headerVariants } from "@/config/animation";
import { useApp } from "@/hooks/useApp";
import { ContentArea } from "@/types";
import { SocialNetworks } from "./SocialNetworks";

export function Footer() {
  const { isInHome } = useApp();

  if (isInHome()) return <></>;

  return (
    <motion.footer
      className="flex items-center justify-center landscape:justify-between border-t border-white border-opacity-10 bg-black/70 portrait:gap-2 portrait:flex-col select-none w-full px-5 py-4 lg:px-12 md:px-12"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={headerVariants}
    >
      <SocialNetworks location={ContentArea.footer} size={18} className="2xl:hidden z-[100]" />
      <p className="m-0 text-white text-opacity-75 text-center">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </motion.footer>
  );
}
