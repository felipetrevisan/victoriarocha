"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { useApp } from "@/hooks/useApp";
import type { ImageProps } from "../types";
import SharedModal from "../Modal/shared";

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const { setLastViewedPhoto } = useApp();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id || null);
    //router.push("/", undefined, { shallow: true });
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
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
