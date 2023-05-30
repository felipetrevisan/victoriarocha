"use client";

import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  selected?: boolean;
  disableHover?: boolean;
  asChild?: boolean;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Button({
  title,
  selected,
  disabled,
  disableHover,
  asChild,
  children,
  ...props
}: Props) {
  const classes = clsx(
    `relative text-white py-2 px-4 rounded-md transition-all duration-200`,
    {
      "opacity-25 pointer-events-none": disabled,
    }
  );

  const Component = asChild ? Slot : "button";

  console.log(children);

  return (
    <Component className={classes} disabled={disabled} {...props}>
      {selected && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-purple-300 transition-opacity duration-150"></span>
      )}
      {children}
    </Component>
  );
}
