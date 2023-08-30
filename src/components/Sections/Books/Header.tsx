"use client";

import { motion } from "framer-motion";
import { getPaginationConfig } from "@/config/pagination";
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
          config={getPaginationConfig(totalPages)}
          onlyDots
          position="horizontal"
          onChange={(page) => setPage(page)}
        />
      )}
    </div>
  );
}
