"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { useApp } from "@/hooks/useApp";
import useKeyPress from "@/hooks/useKeyPress";
import { headerVariants } from "@/config/animation";
import { ContentArea } from "@/types";
import { Menu } from "./Menu";
import { SocialNetworks } from "./SocialNetworks";

const oswald = Oswald({ subsets: ["latin"] });

export function Header() {
  const { toogleMenu, isMenuOpen, isInHome } = useApp();
  const escPressed: boolean = useKeyPress("Escape");

  useLayoutEffect(() => {
    if (escPressed) {
      toogleMenu();
    }
  }, [escPressed]);

  const classes = clsx(
    "landscape:sm:relative landscape:lg:fixed portrait:fixed select-none landscape:lg:left-0 landscape:lg:right-0 landscape:lg:top-0 portrait:left-0 portrait:right-0 portrait:top-0 w-full flex items-center justify-between px-5 lg:px-32 py-4 z-[100] lg:px-16 md:px-12 shadow-black backdrop-blur-md",
    {
      "bg-black/20": isInHome(),
      "bg-black/70": !isInHome(),
    }
  );

  const classesMenuMobile = clsx(
    "fixed z-[100] flex justify-center shadow-black lg:hidden backdrop-blur-md",
    {
      "bg-black/20": isInHome(),
      "bg-black/70": !isInHome(),
    }
  );

  return (
    <AnimatePresence>
      <motion.header
        className={classes}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={headerVariants}
      >
        <div className="flex w-full items-center justify-between">
          <div className="logo">
            <h2
              className={`${oswald.className} text-2xl text-white md:text-3xl lg:text-4xl`}
            >
              Victória Rocha
            </h2>
          </div>
          <button
            type="button"
            className={`flex flex-col items-center justify-center lg:hidden`}
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toogleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "z-[1046] translate-y-1 rotate-45"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "z-[1046] opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "z-[1046] -translate-y-1 -rotate-45"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
          <motion.div className="hidden items-center justify-center lg:flex">
            <Menu isOpen={false} />
          </motion.div>
          {/*className="absolute z-[1045] min-h-screen flex justify-center lg:hidden backdrop-blur-3xl bg-black"
           */}
          <motion.div
            className="hidden flex-wrap items-center justify-center lg:mt-2 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: [0, 1] }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <SocialNetworks location={ContentArea.header} size={18} />
          </motion.div>
        </div>
      </motion.header>
      {isMenuOpen && (
        <motion.div
          className={classesMenuMobile}
          initial={{ width: 0, top: -100, right: 0, height: 0 }}
          animate={{
            width: "100%",
            height: 'max-content',
            top: 64,
            right: 0,
          }}
          exit={{
            width: 0,
            top: -100,
            height: 0,
            right: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <Menu isOpen={isMenuOpen} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
