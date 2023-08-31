"use client";

import { useApp } from "@/hooks/useApp";

export function Footer() {
  const { isInHome } = useApp();

  if (isInHome()) return <></>;

  return (
    <footer className="footer fixed bottom-0 w-screen border-t border-white border-opacity-10 bg-black py-5 z-[100] wide:px-16 md:px-12 shadow-black backdrop-blur-md bg-black/70">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 md:text-right col-span-12 text-center">
            <p className="m-0 text-white text-opacity-75">
              © {new Date().getFullYear()} - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
