"use client";

import { useApp } from "@/hooks/useApp";
import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  const { isHome } = useApp();

  return (
    <>
      <main className="z-30 relative h-screen">{children}</main>
      {!isHome() && (
        <>
          <div className="bg-purple-500 pointer-events-none fixed top-14 right-0 z-20 h-[400px] w-[400px] md:lg:h-[500px] md:lg:w-[500px] rounded-full blur-[100px] opacity-50 w"></div>
          <div className="bg-pink-900 pointer-events-none fixed bottom-14 left-0 z-20 h-[400px] w-[400px] md:lg:h-[500px] md:lg:w-[500px] rounded-full blur-[100px] opacity-50"></div>
        </>
      )}
    </>
  );
}
