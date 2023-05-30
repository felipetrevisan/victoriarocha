"use client";

import { useApp } from "@/hooks/useApp";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export function Footer() {
  const { isHome } = useApp();

  if (isHome()) return <></>;

  return (
    <footer className="footer w-screen bg-black/70 shadow-black backdrop-blur-x border-t border-black border-opacity-10 py-5 dark:bg-black dark:border-white dark:border-opacity-10">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
            <div className="flex justify-center md:justify-start w-full">
              <a
                className="text-black dark:text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="text-black dark:text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="text-black dark:text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="text-black dark:text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="text-black dark:text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 text-center md:text-right">
            <p className="m-0 text-black dark:text-white text-opacity-75">
              © {new Date().getFullYear()} Copyright All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
