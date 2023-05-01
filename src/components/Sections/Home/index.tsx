"use client";

import { useApp } from "@/hooks/useApp";
import clsx from "clsx";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

export function Home() {
  const { isMenuOpen } = useApp();

  const classes = clsx(
    "h-screen bg-black/70 w-full max-w-[1480px] aspect-video transition-all ease-in-out",
    {
      "backdrop-blur-sm": !isMenuOpen,
      "backdrop-blur-lg": isMenuOpen,
    }
  );

  return (
    <div className={classes}>
      {/* <main
          className="flex flex-col items-center justify-center h-screen h-[calc(100vh - var(--header-size))]"
          data-menu-open={isMenuOpen}
        > */}
      <div className="flex flex-col gap-1 items-center justify-center h-screen">
        <h4
          className={`text-purple-500 text-2xl font-light ${oswald.className}`}
        >
          Atriz & Modelo
        </h4>
        <h1 className={`text-8xl font-light ${oswald.className}`}>
          Victória Rocha
        </h1>
        <Link
          href="#"
          className="after:absolute after:w-full after-h-0 after:top-1/2 after-left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rotate-45 after:bg-purple-500 after:opacity-0 after:-z-[1 after:transition-all hover:after:h-[260%] hover:after:opacity-100 py-4 px-10 my-10 mx-7 uppercase relative transition-all border border-white text-white overflow-hidden text-lg"
        >
          Contato
        </Link>
      </div>
      {/* </main> */}
    </div>
  );
}
