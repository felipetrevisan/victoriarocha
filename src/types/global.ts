export enum ContentArea {
  header = "header",
  avatar = "avatar",
  footer = "footer",
}

export enum MenuTypes {
  drawer,
  top,
}

export enum Sections {
  home,
  release,
  books,
  videos,
  contact,
}

export type Section = {
  name: keyof typeof Sections;
  label: string;
  path: string;
};

export type SectionsKey = keyof typeof Sections;

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
