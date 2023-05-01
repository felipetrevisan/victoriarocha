"use client";

import { About } from "@/components/Sections/About";
import { useApp } from "@/hooks/useApp";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Release() {
  const pathName = usePathname();
  const refRelease = useRef<HTMLDivElement>(null);
  
  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection(pathName));
  }, [getSection, pathName, setCurrentSection]);

  return (
    <section
      ref={refRelease}
      className="py-12 sm:py-16 md:py-28"
      data-section="release"
    >
      <About />
    </section>
  );
}
