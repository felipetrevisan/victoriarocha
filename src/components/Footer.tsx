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
      className="flex w-full select-none items-center justify-center border-t border-white border-opacity-10 bg-black/70 px-5 py-4 md:px-12 lg:px-12"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={headerVariants}
    >
      <div className="container flex items-center justify-center portrait:flex-col portrait:gap-2 landscape:justify-between ">
        <SocialNetworks
          location={ContentArea.footer}
          size={18}
          className="z-[100] flex 2xl:invisible"
        />
        <p className="m-0 text-center text-white text-opacity-75">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </motion.footer>
  );
}
