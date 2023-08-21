"use client";

import { Pagination } from "@/components/Pagination";

interface Props {
  totalPages: number;
  setPage: (value: number) => void;
}

export function Header({ totalPages, setPage }: Props) {
  return (
    <div className="mb-5 flex items-center justify-between">
      {totalPages > 1 && (
        <Pagination
          total={totalPages}
          noMargin
          onlyDots
          position="horizontal"
          onChange={(page) => setPage(page)}
        />
      )}
    </div>
  );
}
