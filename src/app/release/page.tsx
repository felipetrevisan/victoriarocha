"use client";

import { Release as Content } from "@/components/Sections/Release";
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
      className="py-32 px-10 md:py-32"
      data-section="release"
    >
      <Content />
    </section>
  );
}