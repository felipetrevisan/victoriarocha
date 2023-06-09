"use client";

import { Home as Main } from "@/components/Sections/Home";
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
      className="flex items-center justify-center bg-app bg-cover h-screen"
      data-section="home"
    >
      <Main />
    </section>
  );
}
