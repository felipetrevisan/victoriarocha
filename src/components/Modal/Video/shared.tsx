import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { X } from "lucide-react";
import ReactPlayer from "react-player";

import { galleryVariants } from "@/config/animation";
import type { Video } from "@/types/videos";

type SharedModalProps = {
  currentVideo: Video;
  closeModal: () => void;
};
export default function SharedModal({
  currentVideo,
  closeModal,
}: SharedModalProps) {
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
          className="z-[1002!important] flex h-11 w-11 items-center justify-center rounded-full bg-purple-500/50 p-2 text-white/75 backdrop-blur-lg transition hover:scale-110 hover:bg-purple-900/75 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="wide:h-full xl:taller-than-854:h-auto relative z-50 flex aspect-[3/2] items-center">
        <div className="overflow-hidden">
          <div className="flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentVideo.uri}
                variants={galleryVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <ReactPlayer
                  url={currentVideo.player_embed_url}
                  width="90dvw"
                  height="90dvh"
                  controls
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
