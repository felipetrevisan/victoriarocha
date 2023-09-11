"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DownloadIcon, MailIcon } from "lucide-react";
import { TransitionEffect } from "@/components/TransitionEffect";
import { useApp } from "@/hooks/useApp";
import { slideUpVariants } from "@/config/animation";

const oswald = Oswald({ subsets: ["latin"] });

export function Home() {
  const refHome = useRef<HTMLDivElement>(null);
  const { setCurrentSection, getSection, isMenuOpen } = useApp();

  useEffect(() => {
    setCurrentSection(getSection("/"));
  }, [getSection, setCurrentSection]);

  const classes = clsx(
    "h-screen bg-black/70 w-full aspect-video transition-all ease-in-out",
    {
      "backdrop-blur-sm": !isMenuOpen,
      "backdrop-blur-lg": isMenuOpen,
    }
  );

  return (
    <>
      <TransitionEffect />
      <motion.div
        ref={refHome}
        className="w-screen max-w-full"
        data-section="home"
      >
        <div className="bg-app bg-cover">
          <div className={classes}>
            <div className="flex h-screen flex-col items-center justify-center gap-1">
              <motion.h4
                className={`text-xl font-light text-purple-500 lg:text-2xl ${oswald.className}`}
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                Atriz & Modelo
              </motion.h4>
              <motion.h1
                className={`text-6xl font-light text-white lg:text-8xl ${oswald.className}`}
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                Victória Rocha
              </motion.h1>
              <motion.div
                className="my-10 flex h-16 flex-col gap-6 md:flex-row lg:flex-row"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                <Link
                  href="/contact"
                  className="relative flex h-full items-center justify-center rounded-md bg-black/70 p-5 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-md after:bg-gradient-to-r after:from-[#12c2e9] after:via-[#c471ed] after:to-[#f64f59] hover:bg-black/50 hover:after:animate-pulse"
                >
                  <span className="md:text-md flex items-center justify-center gap-2 text-sm uppercase text-white lg:text-lg">
                    <span>Entre em contato</span>
                    <span>
                      <MailIcon fontSize={10} />
                    </span>
                  </span>
                </Link>
                <Link
                  href="https://victoriarocha.s3.sa-east-1.amazonaws.com/downloads/2020_Victo%CC%81ria%20Rocha.pdf"
                  className="relative flex h-full items-center justify-center rounded-md bg-black/70 p-5 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-md after:bg-gradient-to-r after:from-[#12c2e9] after:via-[#c471ed] after:to-[#f64f59] hover:bg-black/50 hover:after:animate-pulse"
                  download={true}
                  rel="noopeneer noreferrer"
                  target="_blank"
                >
                  <span className="md:text-md flex items-center justify-center gap-2 text-sm uppercase text-white lg:text-lg">
                    <span>Resume / CV</span>
                    <span>
                      <DownloadIcon fontSize={10} />
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
