export interface Image {
  id: number;
  key: string | undefined;
  url: string | undefined;
  height?: string;
  width?: string;
  format?: string;
  blurDataUrl?: string;
}
