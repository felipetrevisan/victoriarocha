"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

import { useApp } from "@/hooks/useApp";
import useKeyPress from "@/hooks/useKeyPress";
import { headerVariants, menuMobileVariants } from "@/config/animation";
import { Menu } from "./Menu";

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
    "fixed select-none left-0 right-0 top-0 w-full flex items-center justify-between px-5 wide:px-32 py-4 z-[100] wide:px-16 md:px-12 shadow-black backdrop-blur-xl",
    {
      "border border-black/5 backdrop-blur-md bg-black/20": isInHome(),
      "backdrop-blur-md bg-black/70 wide:rounded-none":
        !isInHome(),
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
              className={`${oswald.className} text-2xl text-white md:text-3xl wide:text-4xl`}
            >
              Victória Rocha
            </h2>
          </div>
          <button
            type="button"
            className="flex flex-col items-center justify-center wide:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toogleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-y-1 rotate-45 z-[1046]" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0 z-[1046]" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "-translate-y-1 -rotate-45 z-[1046]" : "translate-y-0.5"
              }`}
            ></span>
          </button>
          <motion.div className="hidden items-center justify-center wide:flex">
            <Menu isOpen={false} />
          </motion.div>
          {isMenuOpen && (
            <motion.div
              className="absolute z-[1045] min-h-screen flex justify-center wide:hidden backdrop-blur-3xl bg-black"
              initial={{ width: 0, top: 0, right: 0 }}
              animate={{
                width: 300,
                top: 0,
                right: 0
              }}
              exit={{
                width: 0,
                top: 0,
                right: -100,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <Menu isOpen={isMenuOpen} />
            </motion.div>
          )}
          <motion.div
            className="hidden flex-wrap items-center justify-center wide:mt-2 wide:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: [0, 1] }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <a
              className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
              href="https://www.instagram.com/victoriarocha.oficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
              href="http://www.facebook.com/VRmidia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-600 bg-purple-900/80 text-white duration-300 ease-linear hover:scale-125"
              href="https://www.youtube.com/user/VRmidia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={18} />
            </a>
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
