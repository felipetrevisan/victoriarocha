import { Variants } from "framer-motion";

export const galleryVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const menuMobileVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
    visibility: "hidden",
    opacity: 0
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
    visibility: "visible",
    opacity: 1
  },
};

export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const headerVariants: Variants = {
  hide: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

export const opacityVariants: Variants = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};
