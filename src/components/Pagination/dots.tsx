import React, { useState } from "react";

import { PaginationConfig } from "@/config/pagination";
import { PaginationItem } from "./item";

interface Props {
  value?: string | number;
  index: number;
  isBefore?: boolean;
  onlyDots?: boolean;
  config: PaginationConfig;
  onClick?: (e: React.MouseEvent) => void;
}

export function PaginationDots({
  value,
  index,
  isBefore,
  onlyDots,
  config,
  onClick,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <PaginationItem
      onlyDots={onlyDots}
      value={value}
      index={index}
      config={config}
      onClick={(e: React.MouseEvent) => onClick && onClick(e)}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      {showMore ? (
        <div
          className="pagination-dots w-5 h-5 rounded-full bg-red-500"
          role="presentation"
        />
      ) : (
        <div className="pagination-dots w-5 h-5 rounded-full bg-red-500" />
      )}
    </PaginationItem>
  );
}
