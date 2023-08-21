"use client";

import Carousel from "@/components/Sections/Books/Caroussel";
import { useApp } from "@/hooks/useApp";
import { useEffect } from "react";

type Props = {
  params: { photoId: number; photoKey: string };
};

export default function ViewPhoto({ params }: Props) {
  const { books, setCurrentViewPhoto } = useApp();
  const { photoId, photoKey } = params;

  useEffect(() => {
    setCurrentViewPhoto(+photoId);
  }, [photoId, setCurrentViewPhoto]);

  const currentPhoto = books.find(
    (image) => image.id === Number(photoId) && image.key === photoKey
  );

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel currentPhoto={currentPhoto!} index={photoId} />
    </main>
  );
}
