"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";


import { useApp } from "@/hooks/useApp";
import { opacityVariants } from "@/config/animation";
import Modal from "@/components/Modal/Video";
import { Title } from "@/components/Title";
import { TransitionEffect } from "@/components/TransitionEffect";
import type { Video, VideosResponse } from "@/types";

export function Videos({ data, itemsPerPage }: VideosResponse & { itemsPerPage: number }) {
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

  const videos = data.slice((page - 1) * +itemsPerPage, page * +itemsPerPage);

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
            videos={videos}
            currentVideo={currentVideo}
            onClose={() => setCurrentVideo({} as Video)}
          />
        )}
        <div className="flex flex-row gap-7 justify-center md:flex-col">
          <AnimatePresence>
            <div className="overflow-hidden rounded-2xl border border-solid border-black/[0.1] bg-white/[0.1] p-6 backdrop-blur-xl backdrop-saturate-[180deg]">
              <div className="gap-4 narrow:columns-1 wide:columns-3 xl:columns-3 2xl:columns-3">
                {videos.slice((page - 1) * +itemsPerPage, page * +itemsPerPage).map((video) => (
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
