"use client";

import clsx from "clsx";
import React, { memo } from "react";
import type { Sizes } from "@/types/size";
import { PaginationItem } from "./item";

interface Props {
  isPrev?: boolean;
  disabled?: boolean;
  onlyDots?: boolean;
  animated?: boolean;
  bordered?: boolean;
  position: "vertical" | "horizontal";
  onClick?: (e: React.MouseEvent) => void;
}

type NativeAttrs = Omit<React.SVGAttributes<unknown>, keyof Props>;

export type PaginationIconProps = Props & Sizes & NativeAttrs;

function PaginationIcon({
  isPrev = false,
  disabled,
  onlyDots,
  animated,
  bordered,
  size,
  position = "vertical",
  onClick,
  ...props
}: PaginationIconProps) {
  const classes = clsx({
    "rotate-180": !isPrev && position === "horizontal",
    "rotate-0": isPrev && position === "horizontal",
    "-rotate-90": !isPrev && position === "vertical",
    "rotate-90": isPrev && position === "vertical",
    "w-5 text-[0.625rem]": size === "xs",
    "w-8 text-sm": size === "sm",
    "w-5 text-md": size === "md",
    "w-10 text-lg": size === "lg",
    "w-11 text-xl": size === "xl",
  });

  return (
    <PaginationItem
      preserveContent
      animated={animated}
      bordered={bordered}
      disabled={disabled}
      onlyDots={onlyDots}
      value={isPrev ? "<" : ">"}
      onClick={(e) => onClick && onClick(e)}
    >
      <svg
        className={classes}
        fill="none"
        focusable="false"
        role="presentation"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.5 19l-7-7 7-7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    </PaginationItem>
  );
}

const MemoPaginationIcon = memo(PaginationIcon);

export default MemoPaginationIcon;
