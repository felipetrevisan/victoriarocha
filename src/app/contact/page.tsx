"use client";

import { Contact as Content } from "@/components/Sections/Contact";
import { useApp } from "@/hooks/useApp";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Contact() {
  const pathName = usePathname();
  const refContact = useRef<HTMLDivElement>(null);
  
  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection(pathName));
  }, [getSection, pathName, setCurrentSection]);

  return (
    <section
      ref={refContact}
      className="py-32 px-10 md:py-32"
      data-section="contact"
    >
      <Content />
    </section>
  );
}