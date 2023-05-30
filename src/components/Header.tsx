"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import { Menu as IconMenu, X } from "lucide-react";
import { Menu } from "./Menu";
import { MenuTypes } from "./Menu/type";
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
        className="fixed left-0 right-0 top-0 z-[100] bg-black/70 px-2 shadow-black backdrop-blur-xl data-main:border data-main:border-black/5 data-main:backdrop-blur-md lg:top-2 lg:mx-5 lg:rounded-full lg:data-main:bg-black/30"
        data-section={currentSection?.name || ""}
      >
        {/* <div className="w-full mr-auto ml-auto flex items-center justify-between select-none relative py-5 lg:py-4 container"> */}
        <div className="container relative flex select-none items-center justify-between py-5 lg:py-4">
          <div>
            <h2
              className={`${oswald.className} text-2xl md:text-3xl lg:text-4xl`}
            >
              Victória Rocha
            </h2>
          </div>
          {/* <button className="flex w-[40px] flex-col lg:hidden">
          <span className="inline-block h-[2px] w-[25px] bg-slate-900"></span>
          <span className="my-[5px] inline-block h-[2px] w-[25px] bg-slate-900"></span>
          <span className="inline-block h-[2px] w-[25px] bg-slate-900"></span>
        </button> */}
          <button
            type="button"
            onClick={isMenuOpen ? closeMenu : openMenu}
            data-menu-open={isMenuOpen}
            className="flex w-[40px] p-2 transition-all ease-menu-icon hover:rounded-full hover:bg-purple-500/40 hover:p-2 data-[menu-open=true]:absolute data-[menu-open=true]:-right-48 data-[menu-open=true]:top-5 data-[menu-open=true]:mr-48 lg:hidden lg:data-[menu-open=true]:relative lg:data-[menu-open=true]:right-auto lg:data-[menu-open=true]:top-auto lg:data-[menu-open=true]:z-auto lg:data-[menu-open=true]:mr-56"
          >
            {isMenuOpen ? <X size={30} /> : <IconMenu size={30} />}
          </button>
          <div className="hidden lg:flex">
            <Menu isOpen={false} />
          </div>
          <div className="flex lg:hidden">
            <Menu isOpen={isMenuOpen} />
          </div>
        </div>
      </header>
    </>
  );
}
