"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Cycle, useCycle } from "framer-motion";
import { Image, Section, defaultSections } from "@/types";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  currentSection: Section;
  lastViewedPhoto: number | null;
  currentViewPhoto: number | null;
  books: Image[];
  isInHome: () => boolean;
  getSection: (sectionName: string) => Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  setLastViewedPhoto: Dispatch<SetStateAction<number | null>>;
  setBooks: Dispatch<SetStateAction<Image[]>>;
  setCurrentViewPhoto: Dispatch<SetStateAction<number | null>>;
  toogleMenu: Cycle;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, toogleMenu] = useCycle(false, true);

  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [lastViewedPhoto, setLastViewedPhoto] = useState<number | null>(null);
  const [currentViewPhoto, setCurrentViewPhoto] = useState<number | null>(null);
  const [books, setBooks] = useState<Image[]>([]);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section?.path === "/")!;
  });

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
        toogleMenu,
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
