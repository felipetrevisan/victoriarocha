"use client";

import { Menu as IconMenu, X } from "lucide-react";
import { Oswald } from "next/font/google";
import { Menu } from "./Menu";
import { MenuTypes } from "./Menu/type";
import { useApp } from "@/hooks/useApp";

const oswald = Oswald({ subsets: ["latin"] });

const defaultMenuType = MenuTypes.drawer;

export function Header() {
  const { openMenu, closeMenu, isMenuOpen, currentSection } = useApp();

  return (
    <header className="fixed z-[100] left-0 right-0 data-main:bg-transparent data-main:shadow-none data-main:backdrop-blur-none bg-black/70 shadow-black backdrop-blur-xl" data-section={currentSection.name}>
      <div className="w-full mr-auto ml-auto flex items-center justify-between select-none relative py-5 lg:py-4 container">
        <div className="">
          <h2 className={`${oswald.className} text-4xl`}>Victória Rocha</h2>
        </div>
        {defaultMenuType === MenuTypes.drawer && (
          <div className="">
            <button
              type="button"
              onClick={isMenuOpen ? closeMenu : openMenu}
              data-menu-open={isMenuOpen}
              className="transition-all ease-menu-icon data-[menu-open=true]:mr-48 hover:rounded-full hover:bg-purple-500/40 hover:p-2 p-2"
            >
              {isMenuOpen ? <X size={30} /> : <IconMenu size={30} />}
            </button>
          </div>
        )}
        {defaultMenuType === MenuTypes.drawer && (
          <Menu isOpen={isMenuOpen} type={defaultMenuType} />
        )}
      </div>
    </header>
  );
}
