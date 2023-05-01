"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

// <section className="h-screen w-screen flex items-center justify-center bg-black text-white py-28 container">

export function Works() {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center">
        <div className="lg:w-2/4 mx-auto">
          <h3
            className={`${oswald.className} relative mb-12 pb-4 font-semibold text-4xl after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-20 after:bg-divider`}
          >
            Books
          </h3>
        </div>
      </div>
    </div>
  );
}
