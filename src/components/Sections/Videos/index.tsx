"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";

import type { Video, VideosResponse } from "@/types/videos";
import { Title } from "../Title";

import "keen-slider/keen-slider.min.css";
import Modal from "@/components/Modal/Video";
import { usePathname } from "next/navigation";
import { useApp } from "@/hooks/useApp";

type Props = VideosResponse;

export function Videos({ data }: Props) {
  const pathName = usePathname();
  
  const { setCurrentSection, getSection } = useApp();

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

  // useEffect(() => {
  //   instanceRef?.current?.update({ ...options });
  // }, [instanceRef, options]);

  if (pathName) {
    setCurrentSection(getSection(pathName));
  }

  // useEffect(() => {
  //   setCurrentSection(getSection(pathName));
  // }, [getSection, pathName, setCurrentSection]);

  const showVideo = (video: Video) => {
    setCurrentVideo(video);
  };

  return (
    <>
      {currentVideo?.player_embed_url && <Modal currentVideo={currentVideo} onClose={() => setCurrentVideo({} as Video)} />}
      <div className="container flex flex-col max-sm::items-center justify-center md:lg:justify-start">
        <div className="flex flex-wrap items-center justify-center">
          <Title content="Vídeos" />
        </div>
        <div className="flex flex-wrap items-center">
          <div className="relative w-full rounded-2xl border border-solid border-black/[0.1] bg-white/[0.1] p-6 backdrop-saturate-[180deg] backdrop-blur-xl">
            <div className="relative overflow-hidden w-full">
              <div ref={sliderRef} className="keen-slider">
                {data.map((video) => (
                  <div
                    key={video.uri}
                    className="keen-slider__slide relative flex items-center justify-center rounded-lg border hover:border border-transparent/20 hover:border-purple-500 w-[400px] h-[200px] hover:before:absolute hover:before:z-30 hover:before:w-[400px] hover:before:h-[200px] hover:before:bg-black/50 transition-all ease-in duration-500 cursor-pointer"
                    onClick={() => showVideo(video)}
                  >
                    <Image
                      src={video.pictures.base_link}
                      alt={video.name}
                      width={400}
                      height={200}
                      className="scale-100 hover:scale-125 ease-in duration-500"
                    />
                  </div>
                ))}
                ;
              </div>
            </div>
            {loaded && instanceRef.current && (
              <div className="flex flex-row justify-center items-center gap-2 mt-4">
                {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, index) => {
                  return (
                    <button
                      key={index}
                      data-active={currentSlide === index}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(index)
                      }}
                      className="w-4 h-4 hover:w-5 hover:h-5 data-[active=true]:w-5 data-[active=true]:h-5 data-[active=true]:bg-white/50 rounded-full bg-purple-600/50"
                    ></button>
                  )
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
    </>
  );
}
