"use client";

import clsx from "clsx";
import { useCallback } from "react";
import usePagination, {
  DOTS,
  PaginationItemParam,
} from "@/hooks/usePagination";
import { PaginationConfig } from "@/config/pagination";
import type { Sizes } from "@/types/size";
import { PaginationDots } from "./dots";
import { PaginationItem } from "./item";
import PaginationIcon from "./icon";

interface Props {
  page?: number;
  shadow?: boolean;
  initialPage?: number;
  loop?: boolean;
  onlyDots?: boolean;
  controls?: boolean;
  dotsJump?: number;
  total?: number;
  siblings?: number;
  boundaries?: number;
  position: "vertical" | "horizontal";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: React.CSSProperties | string;
  config: PaginationConfig;
  onChange?: (page: number) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type PaginationProps = Props & Sizes & NativeAttrs;

export function Pagination({
  page,
  initialPage = 1,
  total = 1,
  loop = false,
  onlyDots = true,
  siblings = 1,
  boundaries = 1,
  dotsJump = 5,
  controls = true,
  size = "md",
  position = "vertical",
  className,
  config,
  onChange,
}: PaginationProps) {
  const { range, active, setPage, previous, next, first, last } = usePagination(
    {
      page,
      initialPage,
      siblings,
      boundaries,
      total,
      onChange,
    }
  );

  const renderItem = useCallback(
    (value: PaginationItemParam, index: number) => {
      if (value === DOTS) {
        const isBefore = index < range.indexOf(active);

        return (
          <PaginationDots
            key={`pagination-item-${value}-${index}`}
            isBefore={isBefore}
            onlyDots={onlyDots}
            value={value}
            index={index}
            config={config}
            onClick={() =>
              isBefore
                ? setPage(active - dotsJump >= 1 ? active - dotsJump : 1)
                : setPage(
                    active + dotsJump <= total ? active + dotsJump : total
                  )
            }
          />
        );
      }

      return (
        <PaginationItem
          key={`pagination-item-${value}-${index}`}
          active={value === active}
          onlyDots={onlyDots}
          value={value}
          index={index}
          config={config}
          onClick={() => value !== active && setPage(value)}
        >
          {value}
        </PaginationItem>
      );
    },
    [active, onlyDots, config, range, setPage, dotsJump, total]
  );

  const handleNext = () => {
    if (loop && active === total) {
      return first();
    }

    return next();
  };

  const handlePrevious = () => {
    if (loop && active === 1) {
      return last();
    }

    return previous();
  };

  const classes = clsx(
    "m-0 p-0 inline-flex",
    className
  );

  return (
    <nav className={classes}>
      {controls && (
        <PaginationIcon
          isPrev
          disabled={!loop && active === 1}
          size={size}
          position={position}
          onlyDots={onlyDots}
          config={config}
          onClick={handlePrevious}
        />
      )}
      {/* <PaginationHighlight
        active={controls ? range.indexOf(active) + 1 : range.indexOf(active)}
        noMargin={noMargin}
        rounded={rounded}
        shadow={shadow}
      /> */}
      {range.map(renderItem)}
      {controls && (
        <PaginationIcon
          disabled={!loop && active === total}
          size={size}
          position={position}
          onlyDots={onlyDots}
          config={config}
          onClick={handleNext}
        />
      )}
    </nav>
  );
}
