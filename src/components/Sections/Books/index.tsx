"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { useApp } from "@/hooks/useApp";
import { TransitionEffect } from "@/components/TransitionEffect";
import { Title } from "@/components/Title";
import { opacityVariants } from "@/config/animation";
import Modal from "@/components/Modal/Books";
import type { Image as ImageType } from "@/types";

interface Props {
  images: ImageType[];
  itemsPerPage: number;
}

export function Books({ images, itemsPerPage = 6 }: Props) {
  const { setBooks, setCurrentSection, getSection } = useApp();

  const refBooks = useRef<HTMLDivElement>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState<ImageType | undefined>(
    undefined
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(images.length / itemsPerPage));
  }, [images.length, itemsPerPage]);

  useEffect(() => {
    setBooks(images);
  }, [images, setBooks]);

  useEffect(() => {
    setCurrentSection(getSection("/books"));
  }, [getSection, setCurrentSection]);

  const showPhoto = (photo: ImageType) => {
    setCurrentPhoto(photo);
  };

  return (
    <>
      <TransitionEffect />
      <motion.div
        ref={refBooks}
        data-section="book"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: [0, 1] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-wrap items-center justify-center">
          <Title content="Books" />
        </div>
        {currentPhoto !== undefined && (
          <Modal images={images} currentPhoto={currentPhoto} onClose={() => setCurrentPhoto(undefined)} />
        )}
        <div className="flex flex-row gap-7 md:flex-col">
          <AnimatePresence>
            <div className="overflow-hidden rounded-2xl border border-solid border-black/[0.1] bg-white/[0.1] p-6 backdrop-blur-xl backdrop-saturate-[180deg]">
              <div className="columns-2 gap-4 wide:columns-3 xl:columns-3 2xl:columns-3">
                {images
                  .slice((page - 1) * +itemsPerPage, page * +itemsPerPage)
                  .map((photo: ImageType) => (
                    <motion.div
                      key={photo.id}
                      className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in transition after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                      onClick={() => showPhoto(photo)}
                      initial="hide"
                      whileInView="show"
                      exit="hide"
                      variants={opacityVariants}
                    >
                      <Image
                        alt="Victoria Rocha photo"
                        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                        style={{ transform: "translate3d(0, 0, 0)" }}
                        placeholder="blur"
                        blurDataURL={photo.blurDataUrl!}
                        src={photo.url!}
                        width={520}
                        height={280}
                        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  50vw"
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
