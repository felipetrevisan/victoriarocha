"use client";

import { useApp } from "@/hooks/useApp";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ImageProps } from "./types";
import Link from "next/link";
import { Pagination } from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "./Modal";
import { Tabs } from "./Tabs";

interface Props {
  totalPages: number;
  setPage: (value: number) => void;
}

export function Header({ totalPages, setPage }: Props) {
  return (
    <div className="flex justify-between items-center mb-5">
      {/* <Tabs /> */}
      {totalPages > 1 && (
        <Pagination
          // className="md:fixed md:right-60"
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
