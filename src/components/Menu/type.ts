export enum MenuTypes {
  drawer,
  top,
}

export type Section = {
  name: string;
  path: string;
};

export type SectionsKey = "home" | "release" | "books" | "videos" | "contact";

export const defaultSections: Section[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "release",
    path: "/release",
  },
  {
    name: "books",
    path: "/books",
  },
  {
    name: "videos",
    path: "/videos",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
