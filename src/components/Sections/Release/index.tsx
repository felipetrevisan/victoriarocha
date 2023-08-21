"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useApp } from "@/hooks/useApp";
import { releaseAvatarVariants } from "@/utils/animation";
import { TransitionEffect } from "@/components/TransitionEffect";
import { Title } from "@/components/Title";
import { SocialNetworks } from "@/components/SocialNetworks";

export function Release() {
  const refRelease = useRef<HTMLDivElement>(null);

  const { setCurrentSection, getSection } = useApp();

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
        animate={{ opacity: 1}}
        exit={{ opacity: [0, 1] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="relative flex place-items-center justify-center md:col-span-5 lg:col-span-6">
              <div className="relative m-auto mx-auto max-w-[400px] overflow-hidden rounded-full lg:sticky lg:top-[120px]">
                <motion.div
                  className="group relative h-[300px] w-[300px] max-w-[300px] rounded-full md:h-[400px] md:w-[400px] md:max-w-[400px] lg:h-[400px] lg:w-[400px] lg:max-w-[400px]"
                  initial="initial"
                  animate="animate"
                  variants={releaseAvatarVariants}
                >
                  <Image
                    className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px]"
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
                  variants={releaseAvatarVariants}
                >
                  <SocialNetworks />
                </motion.div>
              </div>
            </div>
            <div className="pt-lg-0 pt-5 md:col-span-7 lg:col-span-6">
              <div>
                <div>
                  <Title content="Release" />
                  <div className="flex flex-col gap-6 text-justify">
                    <p>
                      Victória Rocha começou sua carreia artística aos 6 anos de
                      idade. Mudou-se para Buenos Aires (Argentina), em 1998,
                      para interpretar a pequena Nádia na primeira versão de
                      Chiquititas (SBT) onde ficou nacionalmente conhecida.
                    </p>
                    <p>
                      Ao voltar para o Brasil, dois anos depois, protagonizou
                      sua primeira novela: O Sonho de Luiza (RedeTV) e
                      participou de campanhas publicitárias.
                    </p>
                    <p>
                      No teatro, atuou em mais de 18 peças dentre elas comédias,
                      musicais e infantis. É formada pela Escola de Atores
                      Braapa - Força de Cultura. Estudou também o curso
                      extensivo de Interpretação para TV e Cinema, com o Diretor
                      Fernando Leal, além de oficinas musicais e teatrais. Se
                      dedica a estudos de canto e ballet clássico e ao curso de
                      Montagem Musical da escola A Voz em Cena.
                    </p>
                    <p>
                      Em março de 2020, concluiu o Módulo 1 do Método Meisner,
                      ministrado por Ana Paula Dias responsável pelos cursos e
                      consultorias na escola Be True.
                    </p>
                    <p>
                      Atualmente faz parte do Processo Atores SP, ministrado
                      pela atriz, diretora e agente de atores Vânia de Brito.
                      Além de atriz, Victória é formada em Arquitetura e
                      Urbanismo pelo Centro Universitário SENAC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
