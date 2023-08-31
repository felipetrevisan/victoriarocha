import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ReactPlayer from "react-player";

import { range } from "@/utils/numbers";
import { galleryVariants } from "@/config/animation";
import type { Video, SharedModalProps } from "@/types";

export default function SharedModal({
  index,
  items,
  changeItemId,
  closeModal,
  navigation,
  currentItem,
  direction,
}: SharedModalProps<Video>) {
  const [loaded, setLoaded] = useState(false);

  let filteredVideos = items?.filter((item: Video) =>
    range(index - 15, index + 15).includes(item.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (items?.length && index < items?.length - 1) {
        changeItemId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changeItemId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentVideo = items ? items[index] : currentItem;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="z-[1002] absolute right-5 top-5 flex items-center gap-2 p-3 text-white">
        <button
          onClick={() => closeModal()}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-500/50 p-2 text-white/75 backdrop-blur-lg transition hover:scale-110 hover:bg-purple-900/75 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div
        className="relative flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[1/1] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={galleryVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute z-[51]"
              >
                <ReactPlayer
                  url={currentVideo?.player_embed_url}
                  width="80dvw"
                  height="50dvh"
                  controls
                  onReady={() => setLoaded(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div className="z-50 absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Buttons */}
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-purple-500/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-purple-900/75 hover:text-white focus:outline-none hover:scale-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeItemId(index - 1)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < items!.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-purple-500/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-purple-900/75 hover:text-white focus:outline-none hover:scale-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeItemId(index + 1)}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}
            </div>
          )}
          {/* Bottom Nav bar */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredVideos?.map(({ id, uri, pictures: { base_link } }) => (
                    <motion.button
                      initial={{
                        width: "0%",
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: "100%",
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: "0%" }}
                      onClick={() => changeItemId(id)}
                      key={id}
                      className={`${
                        id === index
                          ? "z-20 rounded-md shadow shadow-black/50"
                          : "z-10"
                      } ${id === 0 ? "rounded-l-md" : ""} ${
                        id === items!.length - 1 ? "rounded-r-md" : ""
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? "brightness-110 hover:brightness-110"
                            : "brightness-50 contrast-125 hover:brightness-75"
                        } h-full transform object-cover transition`}
                        blurDataURL={base_link!}
                        src={base_link!}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}