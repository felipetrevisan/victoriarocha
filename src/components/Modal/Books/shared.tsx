import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { range } from "@/utils/numbers";
import { galleryVariants } from "@/config/animation";
import type { Image as ImageType, SharedModalProps } from "@/types";

export default function SharedModal({
  index,
  items,
  changeItemId,
  closeModal,
  navigation,
  currentItem,
  direction,
}: SharedModalProps<ImageType>) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = items?.filter((item: ImageType) =>
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

  let currentImage = items ? items[index] : currentItem;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="absolute right-5 top-5 flex items-center gap-2 p-3 text-white">
        <button
          onClick={() => closeModal()}
          className="z-[1002] flex h-11 w-11 items-center justify-center rounded-full bg-purple-500/50 p-2 text-white/75 backdrop-blur-lg transition hover:scale-110 hover:bg-purple-900/75 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div
        className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center lg:h-full"
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
                className="absolute"
              >
                <Image
                  width={navigation ? 800 : 860}
                  height={navigation ? 800 : 860}
                  priority
                  objectFit="cover"
                  alt=""
                  blurDataURL={currentImage?.blurDataUrl}
                  src={currentImage?.url!}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  50vw"
                  onLoadingComplete={() => setLoaded(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div className="absolute inset-0 mx-auto max-w-7xl items-center justify-center">
          {/* Buttons */}
          {loaded && (
            <div className="relative aspect-[1/1] max-h-full w-full hidden lg:flex">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-[calc(50%-385px)] top-[calc(50%-50px)] rounded-full border border-black/50 p-3 text-black/75 backdrop-blur-lg transition hover:bg-purple-900/75 hover:text-white focus:outline-none hover:animate-pulse"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeItemId(index - 1)}
                    >
                      <ChevronLeft className="narrow:h-12 narrow:w-12 lg:h-8 lg:w-8" />
                    </button>
                  )}
                  {index + 1 < items!.length && (
                    <button
                      className="absolute right-[calc(50%-385px)] top-[calc(50%-50px)] rounded-full border border-black/50 p-3 text-black/75 backdrop-blur-lg transition hover:bg-purple-900/75 hover:text-white focus:outline-none hover:animate-pulse"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeItemId(index + 1)}
                    >
                      <ChevronRight className="narrow:h-12 narrow:w-12 lg:h-8 lg:w-8" />
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
                  {filteredImages?.map(({ blurDataUrl, url, id }) => (
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
                        blurDataURL={blurDataUrl}
                        src={url!}
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