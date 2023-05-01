"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { Section, defaultSections } from "@/components/Menu/type";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  currentSection: Section;
  openMenu: () => void;
  closeMenu: () => void;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  getSection: (sectionName: string) => Section;
  // setSections: Dispatch<SetStateAction<Section[]>>;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [sections, setSections] = useState<Section[]>(defaultSections);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section.path === pathName)!;
  });

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const getSection = useCallback(
    (sectionPath: string) => {
      let path = sectionPath || "/";

      return sections.find((section) => section.path === path)!;
    },
    [sections]
  );

  return (
    <AppContext.Provider
      value={{
        openMenu,
        closeMenu,
        isMenuOpen,
        sections,
        currentSection,
        setCurrentSection,
        getSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextProps {
  return useContext(AppContext);
}
