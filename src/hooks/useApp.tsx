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
import { ImageProps } from "@/components/Sections/Works/types";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  isHome: boolean;
  currentSection: Section;
  lastViewedPhoto: number | null;
  currentViewPhoto: number | null;
  books: ImageProps[];
  openMenu: () => void;
  closeMenu: () => void;
  isInHome: () => boolean;
  getSection: (sectionName: string) => Section;
  setIsHome: Dispatch<SetStateAction<boolean>>;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  setLastViewedPhoto: Dispatch<SetStateAction<number | null>>;
  setBooks: Dispatch<SetStateAction<ImageProps[]>>;
  setCurrentViewPhoto: Dispatch<SetStateAction<number | null>>;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [isHome, setIsHome] = useState<boolean>(false);
  const [lastViewedPhoto, setLastViewedPhoto] = useState<number | null>(null);
  const [currentViewPhoto, setCurrentViewPhoto] = useState<number | null>(null);
  const [books, setBooks] = useState<ImageProps[]>([]);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section.path === pathName)!;
  });

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  
  const isInHome = useCallback(
    () => currentSection?.path === "/",
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
        openMenu,
        closeMenu,
        isMenuOpen,
        sections,
        currentSection,
        isInHome,
        lastViewedPhoto,
        currentViewPhoto,
        books,
        isHome,
        getSection,
        setCurrentSection,
        setIsHome,
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
