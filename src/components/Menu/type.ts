export enum MenuTypes {
  drawer,
  top,
}

export type Section = {
  name: string;
  label: string;
  path: string;
};

export type SectionsKey = "home" | "release" | "books" | "videos" | "contact";

export const defaultSections: Section[] = [
  {
    name: "home",
    label: "Home",
    path: "/",
  },
  {
    name: "release",
    label: "Release",
    path: "/release",
  },
  {
    name: "books",
    label: "Books",
    path: "/books",
  },
  {
    name: "videos",
    label: "Videos",
    path: "/videos",
  },
  {
    name: "contact",
    label: "Contato",
    path: "/contact",
  },
];
