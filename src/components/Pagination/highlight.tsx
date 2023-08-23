import React, { useMemo, useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  active: number;
  rounded?: boolean;
  noMargin?: boolean;
  shadow?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type PaginationHighlightProps = Props & NativeAttrs;

export function PaginationHighlight({
  active,
  shadow,
  noMargin,
  rounded,
  ...props
}: Props) {
  const [selfActive, setSelfActive] = useState(active);
  const [moveClassName, setMoveClassName] = useState("");

  useEffect(() => {
    if (active !== selfActive) {
      setSelfActive(active);
      setMoveClassName(`pagination-highlight--moving`);

      const timer = setTimeout(() => {
        setMoveClassName("");
        clearTimeout(timer);
      }, 350);
    }
  }, [active, selfActive]);

  const leftValue = useMemo(
    () =>
      noMargin
        ? `2.5rem * ${selfActive}`
        : `2.5rem * ${selfActive} + ${selfActive * 4 + 2}px`,
    [selfActive, noMargin]
  );

  const classes = clsx(
    "pagination-highlight animate-dot absolute top-0 z-[100] bg-red-600 rounded-full h-[1.75rem] min-w-[1.75rem] duration-300 ease-in [transition:left_350ms_ease_in_0s,transform_300ms_ease_in_0s] animate-pagination",
    moveClassName,
    {}
  );

  return (
    <div
      aria-hidden={true}
      className={classes}
      style={{ left: `calc(${leftValue})` }}
      {...props}
    />
  );
}
