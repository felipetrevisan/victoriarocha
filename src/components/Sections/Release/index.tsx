"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { DownloadIcon } from "lucide-react";

import { useApp } from "@/hooks/useApp";
import { opacityVariants } from "@/config/animation";
import { TransitionEffect } from "@/components/TransitionEffect";
import { Title } from "@/components/Title";
import { SocialNetworks } from "@/components/SocialNetworks";

const oswald = Oswald({ subsets: ["latin"] });

export function Release() {
  const refRelease = useRef<HTMLDivElement>(null);

  const { setCurrentSection, getSection } = useApp();
  const countWorks = useMotionValue(0);
  const rounded = useTransform(countWorks, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(countWorks, 18, { duration: 2 });

    return animation.stop;
  }, []);

  useEffect(() => {
    setCurrentSection(getSection("/release"));
  }, [getSection, setCurrentSection]);

  return (
    <>
      <TransitionEffect />
      <motion.div
        ref={refRelease}
        data-section="release"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: [0, 1] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-6 wide:grid-cols-12 wide:place-items-start taller-than-854:place-items-center">
            <div className="md:col-span-5 relative flex justify-center wide:col-span-6">
              <div className="relative m-auto mx-auto max-w-[400px] overflow-hidden rounded-full wide:mt-28 taller-than-854:mt-0">
                <motion.div
                  className="md:h-[400px] md:w-[400px] md:max-w-[400px] group relative h-[300px] w-[300px] max-w-[300px] rounded-full wide:h-[400px] wide:w-[400px] wide:max-w-[400px]"
                  initial="initial"
                  animate="animate"
                  variants={opacityVariants}
                >
                  <Image
                    className="md:h-[400px] md:w-[400px] h-[300px] w-[300px] wide:h-[400px] wide:w-[400px]"
                    src="/assets/profile-release.png"
                    alt="Foto"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-0 right-0 flex justify-center"
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={opacityVariants}
                >
                  <SocialNetworks />
                </motion.div>
              </div>
            </div>
            <div className="pt-lg-0 md:col-span-7 pt-5 wide:col-span-6">
              <div>
                <div>
                  <Title content="Release" />
                  <div className="flex flex-col gap-6 text-justify">
                    <h2>
                      <p
                        className={`${oswald.className} inline-flex text-2xl text-pink-400`}
                      >
                        Victória Rocha
                      </p>{" "}
                      começou sua carreira artística aos 6 anos de idade.
                      Mudou-se para Buenos Aires (Argentina), em 1998, para
                      interpretar a pequena{" "}
                      <p
                        className={`${oswald.className} inline-flex text-xl text-pink-400`}
                      >
                        Nádia
                      </p>{" "}
                      na primeira versão de{" "}
                      <p
                        className={`${oswald.className} inline-flex text-xl text-pink-400`}
                      >
                        Chiquititas
                      </p>{" "}
                      <p className="inline-flex text-xs">(SBT)</p> onde ficou
                      nacionalmente conhecida.
                    </h2>
                    <h2>
                      Ao voltar para o Brasil, dois anos depois, protagonizou
                      sua primeira novela:{" "}
                      <p
                        className={`${oswald.className} inline-flex text-xl text-pink-400`}
                      >
                        O Sonho de Luiza
                      </p>{" "}
                      <p className="inline-flex text-xs">(RedeTV)</p> e
                      participou de campanhas publicitárias.
                    </h2>
                    <h2>
                      No teatro, atuou em mais de{" "}
                      <motion.p
                        className={`${oswald.className} inline-flex text-xl text-pink-400`}
                      >
                        {rounded}
                      </motion.p>{" "}
                      <p
                        className={`${oswald.className} inline-flex text-xl text-pink-400`}
                      >
                        peças
                      </p>{" "}
                      dentre elas comédias, musicais e infantis. É formada pela
                      Escola de Atores Braapa - Força de Cultura. Estudou também
                      o curso extensivo de Interpretação para TV e Cinema, com o
                      Diretor Fernando Leal, além de oficinas musicais e
                      teatrais. Se dedica a estudos de canto e ballet clássico e
                      ao curso de Montagem Musical da escola A Voz em Cena.
                    </h2>
                    <h2>
                      Em março de 2020, concluiu o Módulo 1 do Método Meisner,
                      ministrado por Ana Paula Dias responsável pelos cursos e
                      consultorias na escola Be True.
                    </h2>
                    <h2>
                      Atualmente faz parte do Processo Atores SP, ministrado
                      pela atriz, diretora e agente de atores Vânia de Brito.
                      Além de atriz, Victória é formada em Arquitetura e
                      Urbanismo pelo Centro Universitário SENAC.
                    </h2>
                  </div>
                  <motion.a
                    href="https://victoriarocha.s3.sa-east-1.amazonaws.com/downloads/2020_Victo%CC%81ria%20Rocha.pdf"
                    className="relative my-10 flex h-full items-center justify-center rounded-md bg-black/70 p-5 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-md after:bg-gradient-to-r after:from-[#12c2e9] after:via-[#c471ed] after:to-[#f64f59] hover:bg-black/50 hover:after:animate-pulse dark:bg-black/90 dark:hover:bg-black/70"
                    download={true}
                    rel="noopeneer noreferrer"
                    target="_blank"
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={opacityVariants}
                  >
                    <span className="md:text-md flex items-center justify-center gap-2 text-sm uppercase text-white wide:text-lg">
                      <span>Ver meu Resume / CV</span>
                      <span>
                        <DownloadIcon fontSize={10} />
                      </span>
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
