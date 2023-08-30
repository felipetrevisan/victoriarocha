"use client";

import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import SharedModal from "@/components/Modal/Books/shared";
import type { Image as ImageType } from "@/types";

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageType;
}) {
  const { setLastViewedPhoto } = useApp();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id || null);
  }

  const changePhotoId = (newVal: number) => newVal;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        {currentPhoto && (
          <Image
            src={currentPhoto.blurDataUrl!}
            className="pointer-events-none h-full w-full"
            alt="blurred background"
            fill
            priority={true}
          />
        )}
      </button>
      <SharedModal
        index={index}
        changeItemId={changePhotoId}
        currentItem={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
