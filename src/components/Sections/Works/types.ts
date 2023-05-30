export interface ImageProps {
  id: number;
  key: string | undefined;
  url: string | undefined;
  height?: string;
  width?: string;
  format?: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  navigation: boolean;
  direction?: number;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
}
