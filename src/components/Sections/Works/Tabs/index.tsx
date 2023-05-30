"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Tabs() {
  const pathName = usePathname();

  return (
    <div className="tabs h-9 text-transparent text-sm flex flex-row justify-between overflow-auto">
      <div className="flex flex-row">
        <div
          data-active="true"
          className="h-full flex items-center gap-[6px] pl-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:border-t-[1px] data-[active=true]:border-t-purple-400 data-[active=true]:text-white"
        >
          <Link href={""} className="flex gap-[6px] items-center ">
            <span
              data-active="true"
              className="text-[#908caa] data-[active=true]:text-[#e0def4] "
            >
              Book 1
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
