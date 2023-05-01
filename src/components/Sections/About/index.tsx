"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

// <section className="h-screen w-screen flex items-center justify-center bg-black text-white py-28 container">

export function About() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
        <div className="md:col-span-5 lg:col-span-6 relative">
          <div className="overflow-hidden relative mx-auto max-w-[400px] rounded-full lg:sticky lg:top-[120px]">
            <div className="relative rounded-full max-w-[400px]">
              <Image
                className="w-[400px] h-[400px]"
                src="/assets/profile.webp"
                alt=""
                width={400}
                height={350}
                style={{ objectFit: "cover" }}
              />
              {/* <img src="assets/img/home-banner.jpg" title="" alt=""> */}
            </div>

            <div className="flex justify-center absolute bottom-8 left-0 right-0">
              <a className="relative mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125" href="#">
                <Facebook size={18} />
              </a>
              <a className="relative top-4 mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125" href="#">
                <Instagram size={18} />
              </a>
              <a className="relative top-5 mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125" href="#">
                <Youtube size={18} />
              </a>
              <a className="relative mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125" href="#">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 lg:col-span-6 pt-5 pt-lg-0 md:pl-16">
          <div>
            <div>
              <h3
                className={`${oswald.className} relative mb-12 pb-4 font-semibold text-4xl after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-20 after:bg-divider`}
              >
                Release
              </h3>
              <p className="mb-5">
                Victória Rocha começou sua carreia artística aos 6 anos de
                idade. Mudou-se para Buenos Aires (Argentina), em 1998, para
                interpretar a pequena Nádia na primeira versão de Chiquititas
                (SBT) onde ficou nacionalmente conhecida.
              </p>
              <p className="mb-5">
                Ao voltar para o Brasil, dois anos depois, protagonizou sua
                primeira novela: O Sonho de Luiza (RedeTV) e participou de
                campanhas publicitárias.
              </p>
              <p className="mb-5">
                No teatro, atuou em mais de 18 peças dentre elas comédias,
                musicais e infantis. É formada pela Escola de Atores Braapa -
                Força de Cultura. Estudou também o curso extensivo de
                Interpretação para TV e Cinema, com o Diretor Fernando Leal,
                além de oficinas musicais e teatrais. Se dedica a estudos de
                canto e ballet clássico e ao curso de Montagem Musical da escola
                A Voz em Cena.
              </p>
              <p className="mb-5">
                Em março de 2020, concluiu o Módulo 1 do Método Meisner,
                ministrado por Ana Paula Dias responsável pelos cursos e
                consultorias na escola Be True.
              </p>
              <p>
                Atualmente faz parte do Processo Atores SP, ministrado pela
                atriz, diretora e agente de atores Vânia de Brito. Além de
                atriz, Victória é formada em Arquitetura e Urbanismo pelo Centro
                Universitário SENAC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
