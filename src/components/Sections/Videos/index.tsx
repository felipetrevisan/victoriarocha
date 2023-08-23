"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import type { Video, VideosResponse } from "@/types/videos";

import { useApp } from "@/hooks/useApp";
import { opacityVariants } from "@/config/animation";
import Modal from "@/components/Modal/Video";
import { Title } from "@/components/Title";
import { TransitionEffect } from "@/components/TransitionEffect";

interface Props extends VideosResponse {
  itemsPerPage: number;
};

export function Videos({ data, itemsPerPage }: Props) {
  const { setCurrentSection, getSection } = useApp();

  const refVideos = useRef<HTMLDivElement>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentVideo, setCurrentVideo] = useState<Video>({} as Video);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data.length, itemsPerPage]);

  const showVideo = (video: Video) => {
    setCurrentVideo(video);
  };

  useEffect(() => {
    setCurrentSection(getSection("/videos"));
  }, [getSection, setCurrentSection]);

  return (
    <>
      <TransitionEffect />
      <motion.div
        ref={refVideos}
        data-section="videos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: [0, 1] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-wrap items-center justify-center">
          <Title content="Vídeos" />
        </div>
        {currentVideo?.player_embed_url && (
          <Modal
            currentVideo={currentVideo}
            onClose={() => setCurrentVideo({} as Video)}
          />
        )}
        <div className="flex flex-row gap-7 md:flex-col">
          <AnimatePresence>
            <div className="relative w-full overflow-hidden">
              <div className="columns-3 gap-4 lg:columns-4 xl:columns-4 2xl:columns-4">
                {data.slice((page - 1) * +itemsPerPage, page * +itemsPerPage).map((video) => (
                  <motion.div
                    key={video.uri}
                    className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in transition after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                    onClick={() => showVideo(video)}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={opacityVariants}
                  >
                    <Image
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL={video.pictures.base_link!}
                      src={video.pictures.base_link!}
                      alt={video.name}
                      width={720}
                      height={480}
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
        {/* <div className="container flex flex-col justify-center md:lg:justify-start">
          <div className="flex flex-wrap items-center justify-center">
            <Title content="Vídeos" />
          </div>
          <div className="flex flex-wrap items-center">
            <div className="relative w-full rounded-2xl border border-solid border-black/[0.1] bg-white/[0.1] p-6 backdrop-blur-xl backdrop-saturate-[180deg]">
              <div className="relative w-full overflow-hidden">
                <div ref={sliderRef} className="keen-slider">
                  {data.map((video) => (
                    <div
                      key={video.uri}
                      className="keen-slider__slide relative flex h-[200px] w-[400px] cursor-pointer items-center justify-center rounded-lg border border-transparent/20 transition-all duration-500 ease-in hover:border hover:border-purple-500 hover:before:absolute hover:before:z-30 hover:before:h-[200px] hover:before:w-[400px] hover:before:bg-black/50"
                      onClick={() => showVideo(video)}
                    >
                      <Image
                        src={video.pictures.base_link}
                        alt={video.name}
                        width={400}
                        height={200}
                        className="scale-100 duration-500 ease-in hover:scale-125"
                      />
                    </div>
                  ))}
                  ;
                </div>
              </div>
              {loaded && instanceRef.current && (
                <div className="mt-4 flex flex-row items-center justify-center gap-2">
                  {Array.from({
                    length: instanceRef.current.track.details.slides.length,
                  }).map((_, index) => {
                    return (
                      <button
                        key={index}
                        data-active={currentSlide === index}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(index);
                        }}
                        className="h-4 w-4 rounded-full bg-purple-600/50 hover:h-5 hover:w-5 data-[active=true]:h-5 data-[active=true]:w-5 data-[active=true]:bg-white/50"
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
  );
}
