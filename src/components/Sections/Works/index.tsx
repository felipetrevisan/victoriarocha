"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { KeenSliderOptions } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "@/hooks/useApp";
import { ImageProps } from "./types";
import { Header } from "./Header";

import "keen-slider/keen-slider.min.css";
import Link from "next/link";

interface Props {
  images: ImageProps[];
  itemsPerPage: number;
}

export function Works({ images, itemsPerPage = 6 }: Props) {
  const pathName = usePathname();

  const { setCurrentSection, getSection, setBooks } = useApp();

  const [totalPages, setTotalPages] = useState(0);
  const [currentImage, setCurrentImage] = useState<ImageProps>(
    {} as ImageProps
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCurrentSection(getSection(pathName));
  }, [getSection, pathName, setCurrentSection]);

  useEffect(() => {
    setTotalPages(Math.ceil(images.length / itemsPerPage));
  }, [images.length, itemsPerPage]);

  useEffect(() => {
    setBooks(images);
  }, [images, setBooks]);

  // useEffect(() => {
  //   // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
  //   if (lastViewedPhoto && !currentViewPhoto) {
  //     lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
  //     setLastViewedPhoto(null);
  //   }
  // }, [currentViewPhoto, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Header totalPages={totalPages} setPage={setPage} />
      <div className="flex flex-row gap-7 md:flex-col">
        <div className="relative w-full overflow-hidden">
          <div className="columns-3 gap-4 lg:columns-4 xl:columns-4 2xl:columns-4">
            {images
              .slice((page - 1) * +itemsPerPage, page * +itemsPerPage)
              .map(({ id, url, key, blurDataUrl }) => (
                <div
                  key={id}
                  className="transition after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                >
                  <Image
                    alt="Victoria Rocha photo"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    placeholder="blur"
                    blurDataURL={blurDataUrl!}
                    src={url!}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  50vw"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
