"use client";

import { useApp } from "@/hooks/useApp";
import clsx from "clsx";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

export function Home() {
  const { isMenuOpen } = useApp();

  const classes = clsx(
    "h-screen bg-black/70 w-full aspect-video transition-all ease-in-out",
    {
      "backdrop-blur-sm": !isMenuOpen,
      "backdrop-blur-lg": isMenuOpen,
    }
  );

  return (
    <div className={classes}>
      <div className="flex flex-col gap-1 items-center justify-center h-screen">
        <h4
          className={`text-purple-500 lg:text-2xl text-xl font-light ${oswald.className}`}
        >
          Atriz & Modelo
        </h4>
        <h1 className={`text-white lg:text-8xl text-6xl font-light ${oswald.className}`}>
          Victória Rocha
        </h1>
        <div className="h-16 w-1/6 my-10">
          <Link
            href="/contact"
            className="flex h-full w-full items-center justify-center relative rounded-md hover:after:animate-pulse after:rounded-md after:-z-[1] after:absolute after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:top-[-1*3px] after:left-[-1*3px] after:bg-gradient-to-r after:from-[#12c2e9] after:via-[#c471ed] after:to-[#f64f59] bg-black/70 hover:bg-black/50 dark:bg-black/90 dark:hover:bg-black/70"
          >
            <span className="uppercase text-white text-sm md:text-md lg:text-lg">Entre em contato</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
