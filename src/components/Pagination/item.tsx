import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { PaginationConfig } from "@/config/pagination";
import { DOTS } from "@/hooks/usePagination";
import type { Sizes } from "@/types/size";

interface Props {
  active?: boolean;
  value?: string | number;
  index?: number;
  disabled?: boolean;
  onlyDots?: boolean;
  preserveContent?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  config: PaginationConfig;
  onClick?: (e: React.MouseEvent) => void;
}

const getItemAriaLabel = (page?: string | number) => {
  if (!page) return;

  switch (page) {
    case DOTS:
      return "dots element";
    case "<":
      return "previous page button";
    case ">":
      return "next page button";
    case "first":
      return "first page button";
    case "last":
      return "last page button";
    default:
      return `${page} item`;
  }
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<unknown>, keyof Props>;

export type PaginationItemProps = Props & Sizes & NativeAttrs;

export function PaginationItem({
  active,
  value,
  index,
  children,
  disabled,
  onlyDots,
  onClick,
  size,
  preserveContent = false,
  config,
  ...props
}: PaginationItemProps) {
  const ariaLabel = useMemo(
    () =>
      active ? `${getItemAriaLabel(value)} active` : getItemAriaLabel(value),
    [value, active]
  );

  const clickHandler = (event: React.MouseEvent) => {
    if (disabled) return;

    onClick && onClick(event);
  };

  return (
    <motion.button
      className="pagination relative md:text-md group mx-1 my-0 box-border inline-flex min-w-max cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-full border-0 bg-black/70 p-0 text-center align-middle text-[0.625rem] capitalize text-inherit text-white shadow-none outline-none backdrop-blur-2xl transition-none hover:bg-purple-700/60 disabled:cursor-not-allowed disabled:text-white disabled:opacity-40 disabled:hover:bg-purple-500/40 data-[active=true]:scale-110 data-[active=true]:cursor-default data-[active=true]:bg-purple-700 data-[active=true]:font-bold data-[active=true]:shadow-sm data-[animated=true]:[transition:transform_0.25s_ease_0s,background-color_0.25s_ease_0s,box-shadow_0.25s_ease_0s] sm:text-sm md:h-7 md:w-7"
      style={{
        width: config?.indicatorSize,
        height: config?.indicatorSize,
      }}
      onClick={clickHandler}
      aria-label={ariaLabel}
    >
      <span className="pagination-content relative left-0 top-0 z-[200] inline-flex items-center group-[data-[active=true]]:text-white">
        {children}
      </span>
    </motion.button>
  );
}
