export type VideosResponse = {
  data: Video[];
};

export type Video = {
  id: number;
  uri: string;
  name: string;
  link: string;
  description: string;
  width: number;
  height: number;
  player_embed_url: string;
  pictures: {
    base_link: string;
  };
};
