"use client";

import { useApp } from "@/hooks/useApp";

export function Footer() {
  const { isInHome } = useApp();

  if (isInHome()) return <></>;

  return (
    <footer className="footer backdrop-blur-x w-screen border-t border-black border-opacity-10 bg-black/70 py-5 shadow-black dark:border-white dark:border-opacity-10 dark:bg-black">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex pb-3 md:col-span-6 md:pb-0">
            <div className="flex w-full justify-center md:justify-start">
              <a
                className="mr-5 text-[16px] text-black text-opacity-90 hover:text-orange-600 dark:text-white"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="mr-5 text-[16px] text-black text-opacity-90 hover:text-orange-600 dark:text-white"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="mr-5 text-[16px] text-black text-opacity-90 hover:text-orange-600 dark:text-white"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="mr-5 text-[16px] text-black text-opacity-90 hover:text-orange-600 dark:text-white"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="mr-5 text-[16px] text-black text-opacity-90 hover:text-orange-600 dark:text-white"
                href="#"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="col-span-12 text-center md:col-span-6 md:text-right">
            <p className="m-0 text-black text-opacity-75 dark:text-white">
              © {new Date().getFullYear()} Copyright All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
