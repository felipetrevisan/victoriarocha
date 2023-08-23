import { Videos as Content } from "@/components/Sections/Videos";
import { VideosResponse } from "@/types/videos";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";

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

  const videos: VideosResponse = await videosResponse.json();

  return (
    <section
      id="videos"
      className="section relative my-32 flex lg:items-center justify-center"
    >
      <div className="container flex flex-col justify-center md:justify-start lg:justify-start">
        <Content data={videos.data} itemsPerPage={12} />
      </div>
    </section>
  );
}
