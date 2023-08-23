"use client";

import { useApp } from "@/hooks/useApp";
import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  const { isInHome } = useApp();

  return (
    <>
      <main className="relative z-30 h-full min-h-screen w-full">
        {children}
      </main>
      {!isInHome() && (
        <>
          <div className="pointer-events-none fixed right-0 top-14 z-20 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
          <div className="pointer-events-none fixed bottom-14 left-0 z-20 h-[400px] w-[400px] rounded-full bg-pink-900 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></div>
        </>
      )}
    </>
  );
}
