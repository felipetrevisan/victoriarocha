"use client";

import { useEffect, useRef } from "react";
import { Works } from "@/components/Sections/Works";
import { usePathname } from "next/navigation";
import { useApp } from "@/hooks/useApp";

export default function Books() {
  const pathName = usePathname();
  const refBook = useRef<HTMLDivElement>(null);

  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection(pathName));
  }, [getSection, pathName, setCurrentSection]);

  return (
    <section
      ref={refBook}
      className="py-12 sm:py-16 md:py-28 h-screen"
      data-section="book"
    >
      <Works />
    </section>
  );
}
