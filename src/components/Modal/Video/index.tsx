"use client";

import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Video } from "@/types/videos";
import SharedModal from "./shared";

export default function Modal({
  currentVideo,
  onClose,
}: {
  currentVideo: Video;
  onClose?: () => void;
}) {
  const overlayRef = useRef(null);

  const handleClose = () => {
    if (onClose !== undefined) {
      onClose();
    }
  };

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-modal flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal currentVideo={currentVideo} closeModal={handleClose} />
    </Dialog>
  );
}
