"use client";

import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

type Props = {
  content: string;
};

export function Title({ content }: Props) {
  return (
    <h1
      className={`${oswald.className} relative mb-12 w-max pb-4 text-3xl md:text-4xl wide:text-4xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-divider`}
    >
      {content}
    </h1>
  );
}
