"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import { Menu } from "./Menu";
import { useApp } from "@/hooks/useApp";
import useKeyPress from "@/hooks/useKeyPress";

const oswald = Oswald({ subsets: ["latin"] });

// const defaultMenuType = MenuTypes.drawer;

export function Header() {
  const { openMenu, closeMenu, isMenuOpen, currentSection } = useApp();
  const escPressed: boolean = useKeyPress("Escape");

  useLayoutEffect(() => {
    if (escPressed) {
      if (isMenuOpen) closeMenu();
      if (!isMenuOpen) openMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [escPressed]);

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-[100] bg-black/70 px-5 shadow-black backdrop-blur-xl data-main:border data-main:border-black/5 data-main:backdrop-blur-md lg:mx-5 lg:rounded-b-3xl lg:rounded-t-none lg:px-2 lg:data-main:top-2 lg:data-main:rounded-full lg:data-main:bg-black/30"
        data-section={currentSection?.name || ""}
      >
        <div className="container relative flex select-none items-center justify-between py-5 lg:py-4">
          <div>
            <h2
              className={`${oswald.className} text-2xl md:text-3xl lg:text-4xl`}
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
