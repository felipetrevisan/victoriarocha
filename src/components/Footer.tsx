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
      className="w-screen border-t border-white border-opacity-10 bg-black bg-black/70 py-5 shadow-black backdrop-blur-md md:px-12 lg:px-16"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={headerVariants}
    >
      <div className="grid grid-cols-12 place-items-center portrait:gap-2">
        <div className="col-span-12 text-center md:col-span-6">
          <div className="flex w-full justify-center md:justify-start">
            <SocialNetworks location={ContentArea.footer} size={18} />
          </div>
        </div>
        <div className="col-span-12 text-center md:col-span-6 md:text-right">
          <p className="m-0 text-white text-opacity-75">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
