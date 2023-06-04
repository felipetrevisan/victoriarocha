"use client";

import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { ImageProps } from "../types";
import SharedModal from "./shared";
// import { useRouter } from "next/router";
import { useApp } from "@/hooks/useApp";

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[];
  onClose?: () => void;
}) {
  const { currentViewPhoto, setCurrentViewPhoto } = useApp();
  let overlayRef = useRef(null);
  // const router = useRouter();

  let index = Number(currentViewPhoto);

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
    setCurrentViewPhoto(newVal);
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
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
