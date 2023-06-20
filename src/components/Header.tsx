"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import { Menu } from "./Menu";
import { useApp } from "@/hooks/useApp";
import useKeyPress from "@/hooks/useKeyPress";
import clsx from "clsx";

const oswald = Oswald({ subsets: ["latin"] });

export function Header() {
  const { openMenu, closeMenu, isMenuOpen, currentSection, isHome, isInHome } = useApp();
  const escPressed: boolean = useKeyPress("Escape");

  useLayoutEffect(() => {
    if (escPressed) {
      if (isMenuOpen) closeMenu();
      if (!isMenuOpen) openMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [escPressed]);

  const classes = clsx('fixed left-0 right-0 top-0 z-[100] lg:px-2 px-5 shadow-black backdrop-blur-xl', {
    'border border-black/5 backdrop-blur-md lg:bg-black/30': isHome || isInHome(),
    'backdrop-blur-md bg-black/70 lg:bg-black/70 lg:rounded-none lg:mx-0 lg:px-0 px-0': !isHome || !isInHome()
  })

  return (
    <>
      <header
        className={classes}
        data-section={currentSection?.name || ""}
      >
        <div className="container relative flex select-none items-center justify-between py-5 lg:py-4">
          <div>
            <h2
              className={`${oswald.className} text-white datext-2xl md:text-3xl lg:text-4x`}
            >
              Victória Rocha
            </h2>
          </div>
          <div className="flex h-full select-none items-center justify-end lg:hidden">
            <div
              aria-label={isMenuOpen ? "close menu" : "open menu"}
              className="group relative h-8 w-10 rotate-0 cursor-pointer transition-all ease-in-out data-[menu-state=closed]:flex data-[menu-state=closed]:flex-col data-[menu-state=closed]:gap-1"
              data-menu-state={isMenuOpen ? "expanded" : "closed"}
              onClick={isMenuOpen ? closeMenu : openMenu}
            >
              <div className="absolute left-0 top-2 block h-[1px] w-full rotate-0 rounded-lg bg-purple-400 opacity-100 transition-all ease-in-out group-data-[menu-state=expanded]:left-2/4 group-data-[menu-state=expanded]:top-4 group-data-[menu-state=expanded]:w-0"></div>
              <div className="absolute left-0 top-4 block h-[1px] w-full rotate-0 rounded-lg bg-purple-400 opacity-100 transition-all ease-in-out group-data-[menu-state=expanded]:rotate-45"></div>
              <div className="absolute left-0 top-4 block h-[1px] w-full rotate-0 rounded-lg bg-purple-400 opacity-100 transition-all ease-in-out group-data-[menu-state=expanded]:-rotate-45"></div>
              <div className="absolute left-0 top-6 block h-[1px] w-full rotate-0 rounded-lg bg-purple-400 opacity-100 transition-all ease-in-out group-data-[menu-state=expanded]:left-2/4 group-data-[menu-state=expanded]:top-4 group-data-[menu-state=expanded]:w-0"></div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Menu isOpen={false} />
          </div>
        </div>
      </header>
      <div className="flex lg:hidden">
        <Menu isOpen={isMenuOpen} />
      </div>
    </>
  );
}
