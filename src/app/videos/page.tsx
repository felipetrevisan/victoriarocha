import { Videos as Content } from "@/components/Sections/Videos";
import type { VideosResponse } from "@/types";

export default async function Videos() {
  const videosResponse = await fetch(
    `https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/videos`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  const videosJson: VideosResponse = await videosResponse.json();
  let index = 0;
  const videos = videosJson.data.map(video => {
    return {
      ...video,
      id: index++
    }
  })
  
  return (
    <section
      id="videos"
      className="section relative my-32 flex wide:items-center justify-center"
    >
      <div className="container flex flex-col justify-center md:justify-start wide:justify-start">
        <Content data={videos} itemsPerPage={12} />
      </div>
    </section>
  );
}
