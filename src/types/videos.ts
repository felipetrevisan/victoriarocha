export type VideosResponse = {
  data: Video[];
};

export type Video = {
  uri: string;
  name: string;
  description: string;
  width: number;
  height: number;
  player_embed_url: string;
  pictures: {
    base_link: string;
  };
};
