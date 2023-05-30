"use client";

import { Oswald } from "next/font/google";
import { Metadata } from "next";
import Carousel from "@/components/Sections/Works/Caroussel";
import { useApp } from "@/hooks/useApp";
import { useEffect } from "react";

const oswald = Oswald({ subsets: ["latin"] });

type Props = {
  params: { photoId: number; photoKey: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   return { title: params.photoKey };
// }

export default function ViewPhoto({ params }: Props) {
  const { books, setCurrentViewPhoto, } = useApp();
  const { photoId, photoKey } = params;

  useEffect(() => {
    setCurrentViewPhoto(+photoId);
  }, [photoId, setCurrentViewPhoto]);

  console.log(params, photoKey);

  // const currentPhotoUrl = 'https://static.wixstatic.com/media/c44567_f8733fc89849476886062ce0d80f7f8e~mv2.jpg/v1/fill/w_1954,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fundo%20elenco.jpg'

  const currentPhoto = books.find(
    (image) => image.id === Number(photoId) && image.key === photoKey
  );

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel currentPhoto={currentPhoto!} index={photoId} />
    </main>
  );
}
