export enum MenuTypes {
  drawer,
  top,
}

export type Section = {
  name: string;
  path: string;
  hash: string;
};

export type SectionsKey = "home" | "release" | "books" | "videos" | "contact";

export const defaultSections: Section[] = [
  {
    name: "home",
    path: "/",
    hash: "",
  },
  {
    name: "release",
    path: "/release",
    hash: "#release",
  },
  {
    name: "books",
    path: "/books",
    hash: "#books",
  },
  {
    name: "videos",
    path: "/videos",
    hash: "#videos",
  },
  {
    name: "contact",
    path: "/contact",
    hash: "#contact",
  },
];
