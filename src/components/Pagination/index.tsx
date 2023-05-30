"use client";

import clsx from "clsx";
import { useCallback } from "react";
import usePagination, {
  DOTS,
  PaginationItemParam,
} from "@/hooks/usePagination";
import type { Sizes } from "@/types/size";
import { PaginationDots } from "./dots";
import { PaginationItem } from "./item";
import PaginationIcon from "./icon";
import { PaginationHighlight } from "./highlight";

interface Props {
  page?: number;
  shadow?: boolean;
  initialPage?: number;
  loop?: boolean;
  animated?: boolean;
  onlyDots?: boolean;
  controls?: boolean;
  rounded?: boolean;
  dotsJump?: number;
  total?: number;
  bordered?: boolean;
  noMargin?: boolean;
  siblings?: number;
  boundaries?: number;
  position: "vertical" | "horizontal";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: React.CSSProperties | string;
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
  shadow = false,
  animated = true,
  bordered = true,
  noMargin = true,
  dotsJump = 5,
  controls = true,
  size = "md",
  position = "vertical",
  className,
  onChange,
  rounded = true,
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
            animated={animated}
            bordered={bordered}
            isBefore={isBefore}
            onlyDots={onlyDots}
            value={value}
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
          animated={animated}
          bordered={bordered}
          onlyDots={onlyDots}
          value={value}
          noMargin={noMargin}
          onClick={() => value !== active && setPage(value)}
        >
          {value}
        </PaginationItem>
      );
    },
    [active, animated, bordered, onlyDots, noMargin, range, setPage, dotsJump, total]
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
          animated={animated}
          bordered={bordered}
          disabled={!loop && active === 1}
          size={size}
          position={position}
          onlyDots={onlyDots}
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
          animated={animated}
          bordered={bordered}
          disabled={!loop && active === total}
          size={size}
          position={position}
          onlyDots={onlyDots}
          onClick={handleNext}
        />
      )}
    </nav>
  );
}
