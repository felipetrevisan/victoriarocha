import React, { useState } from "react";
import { PaginationItem } from "./item";

interface Props {
  value?: string | number;
  isBefore?: boolean;
  animated?: boolean;
  bordered?: boolean;
  onlyDots?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function PaginationDots({
  value,
  isBefore,
  animated,
  bordered,
  onlyDots,
  onClick,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <PaginationItem
      animated={animated}
      bordered={bordered}
      onlyDots={onlyDots}
      value={value}
      onClick={(e: React.MouseEvent) => onClick && onClick(e)}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      {showMore ? (
        <div
          className="pagination-dots w-5 h-5 rounded-full bg-red-500"
          role="presentation"
        ></div>
      ) : (
        <div className="pagination-dots w-5 h-5 rounded-full bg-red-500"></div>
      )}
    </PaginationItem>
  );
}
