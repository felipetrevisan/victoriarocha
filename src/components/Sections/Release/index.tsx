"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { Title } from "../Title";

export function Release() {
  return (
    <div className="container px-4">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
        <div className="md:col-span-5 lg:col-span-6 relative place-items-center justify-center flex">
          <div className="overflow-hidden relative mx-auto max-w-[400px] rounded-full lg:sticky lg:top-[120px] m-auto">
            <div className="group relative rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] max-w-[300px] md:max-w-[400px] lg:max-w-[400px]">
              <Image
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px]"
                src="/assets/profile.webp"
                alt="Foto"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="flex justify-center absolute bottom-8 left-0 right-0">
              <a
                className="relative mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125"
                href="#"
              >
                <Facebook size={18} />
              </a>
              <a
                className="relative top-4 mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125"
                href="#"
              >
                <Instagram size={18} />
              </a>
              <a
                className="relative top-5 mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125"
                href="#"
              >
                <Youtube size={18} />
              </a>
              <a
                className="relative mx-1 inline-flex h-9 w-9 justify-center items-center rounded-full border border-purple-600 bg-purple-900/80 text-white ease-linear duration-300 hover:scale-125"
                href="#"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 lg:col-span-6 pt-5 pt-lg-0">
          <div>
            <div>
              <Title content="Release" />
              <div className="flex gap-6 flex-col text-justify">
                <p>
                  Victória Rocha começou sua carreia artística aos 6 anos de
                  idade. Mudou-se para Buenos Aires (Argentina), em 1998, para
                  interpretar a pequena Nádia na primeira versão de Chiquititas
                  (SBT) onde ficou nacionalmente conhecida.
                </p>
                <p>
                  Ao voltar para o Brasil, dois anos depois, protagonizou sua
                  primeira novela: O Sonho de Luiza (RedeTV) e participou de
                  campanhas publicitárias.
                </p>
                <p>
                  No teatro, atuou em mais de 18 peças dentre elas comédias,
                  musicais e infantis. É formada pela Escola de Atores Braapa -
                  Força de Cultura. Estudou também o curso extensivo de
                  Interpretação para TV e Cinema, com o Diretor Fernando Leal,
                  além de oficinas musicais e teatrais. Se dedica a estudos de
                  canto e ballet clássico e ao curso de Montagem Musical da
                  escola A Voz em Cena.
                </p>
                <p>
                  Em março de 2020, concluiu o Módulo 1 do Método Meisner,
                  ministrado por Ana Paula Dias responsável pelos cursos e
                  consultorias na escola Be True.
                </p>
                <p>
                  Atualmente faz parte do Processo Atores SP, ministrado pela
                  atriz, diretora e agente de atores Vânia de Brito. Além de
                  atriz, Victória é formada em Arquitetura e Urbanismo pelo
                  Centro Universitário SENAC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
