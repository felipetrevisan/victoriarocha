"use client";

import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import SharedModal from "./shared";
import type { Image } from "@//types";

export default function Modal({
  images,
  currentPhoto,
  onClose,
}: {
  images: Image[];
  currentPhoto: Image;
  onClose?: () => void;
}) {
  let overlayRef = useRef(null);

  let index = Number(currentPhoto.id);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  const handleClose = () => {
    if (onClose !== undefined) onClose();
  }

  const changePhotoId = (newVal: number) => {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }

    setCurIndex(newVal);
  }

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        items={images}
        changeItemId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
