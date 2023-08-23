"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Section, defaultSections } from "@/components/Menu/type";
import { ImageProps } from "@/components/Sections/Books/types";
import { Cycle, CycleState, useCycle } from "framer-motion";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  currentSection: Section;
  lastViewedPhoto: number | null;
  currentViewPhoto: number | null;
  books: ImageProps[];
  // openMenu: () => void;
  // closeMenu: () => void;
  isInHome: () => boolean;
  getSection: (sectionName: string) => Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  setLastViewedPhoto: Dispatch<SetStateAction<number | null>>;
  setBooks: Dispatch<SetStateAction<ImageProps[]>>;
  setCurrentViewPhoto: Dispatch<SetStateAction<number | null>>;
  setIsMenuOpen: any
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useCycle(false, true);

  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [lastViewedPhoto, setLastViewedPhoto] = useState<number | null>(null);
  const [currentViewPhoto, setCurrentViewPhoto] = useState<number | null>(null);
  const [books, setBooks] = useState<ImageProps[]>([]);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section?.path === '/')!;
  });

  // const openMenu = () => setIsMenuOpen(true);
  // const closeMenu = () => setIsMenuOpen(false);
  
  const isInHome = useCallback(
    () => currentSection.path === "/",
    [currentSection]
  );

  const getSection = useCallback(
    (sectionPath: string) => {
      let path = sectionPath || "/";

      return sections.find((section) => section?.path === path)!;
    },
    [sections]
  );

  return (
    <AppContext.Provider
      value={{
        // openMenu,
        // closeMenu,
        setIsMenuOpen,
        isMenuOpen,
        sections,
        currentSection,
        lastViewedPhoto,
        currentViewPhoto,
        books,
        isInHome,
        getSection,
        setCurrentSection,
        setLastViewedPhoto,
        setCurrentViewPhoto,
        setBooks
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextProps {
  return useContext(AppContext);
}
