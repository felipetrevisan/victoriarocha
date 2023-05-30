"use client";

import { Home as Content } from "@/components/Sections/Home";
import { useApp } from "@/hooks/useApp";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  const pathName = usePathname();
  const refHome = useRef<HTMLDivElement>(null);

  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection(pathName));
  }, [getSection, pathName, setCurrentSection]);

  return (
    <section
      ref={refHome}
      className="flex h-screen items-center justify-center bg-app bg-cover"
      data-section="home"
    >
      <Content />
    </section>
  );
}
