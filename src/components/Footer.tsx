"use client";

import { useApp } from "@/hooks/useApp";

export function Footer() {
  const { isInHome } = useApp();

  if (isInHome()) return <></>;

  return (
    <footer className="footer backdrop-blur-x w-screen border-t py-5 shadow-black border-white border-opacity-10 bg-black">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center md:col-span-6 md:text-right">
            <p className="m-0 text-opacity-75 text-white">
              © {new Date().getFullYear()} - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
