"use client";

import { useApp } from "@/hooks/useApp";
import { ReactNode } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  const { isMenuOpen, closeMenu} = useApp();

  const shouldCloseMenuOnFocus = () => isMenuOpen ? closeMenu() : undefined;

  return (
    <div onClick={shouldCloseMenuOnFocus}>
      {children}
    </div>
  );
}
