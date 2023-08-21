"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";

import type { Video, VideosResponse } from "@/types/videos";

import { useApp } from "@/hooks/useApp";
import Modal from "@/components/Modal/Video";
import { Title } from "@/components/Title";
import { TransitionEffect } from "@/components/TransitionEffect";

import "keen-slider/keen-slider.min.css";

type Props = VideosResponse;

export function Videos({ data }: Props) {
  const { setCurrentSection, getSection } = useApp();

  const refVideos = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video>({} as Video);

  const options = useMemo<KeenSliderOptions>(() => {
    return {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 15 },
        },
      },
      slides: { perView: 3, spacing: 15 },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    };
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(options);
  
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
        {currentVideo?.player_embed_url && (
          <Modal
            currentVideo={currentVideo}
            onClose={() => setCurrentVideo({} as Video)}
          />
        )}
        <div className="max-sm::items-center container flex flex-col justify-center md:lg:justify-start">
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
              {/* {loaded && instanceRef.current && (
              <>
                {currentSlide !== 0 && (
                  <ChevronLeft
                    size={72}
                    className="absolute top-1/2 -translate-y-1/2 cursor-pointer -left-16"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                  />
                )}

                {currentSlide !==
                  instanceRef.current.track.details.slides.length - 1 && (
                  <ChevronRight
                    size={72}
                    className="absolute top-1/2 -translate-y-1/2 cursor-pointer left-auto -right-16"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                  />
                )}
              </>
            )} */}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
