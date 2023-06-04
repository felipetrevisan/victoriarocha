"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { useApp } from "@/hooks/useApp";

export function Body({ children }: { children: ReactNode }) {
  const { isMenuOpen } = useApp();

  const classes = clsx("bg-zinc-950/90", {
    'overflow-hidden': isMenuOpen
  })

  return (
     <body className={classes}>
      {children}
     </body>
  );
}
