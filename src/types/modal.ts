export interface SharedModalProps<T> {
  index: number;
  items?: T[];
  currentItem?: T;
  navigation: boolean;
  direction?: number;
  changeItemId: (newVal: number) => void;
  closeModal: () => void;
}