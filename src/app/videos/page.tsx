import { Videos as Content } from "@/components/Sections/Videos";
import { VideosResponse } from "@/types/videos";

export default async function Videos() {
  const videosResponse = await fetch(`https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/videos`, {
    headers: { 
      'Accept': 'application/json', 
      'Authorization': `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`
    }
  });

  const videos: VideosResponse = await videosResponse.json();

  return (
    <section
      id="videos"
      className="section relative flex h-screen max-h-screen w-screen items-center justify-center"
    >
      <Content data={videos.data} />
    </section>
  );
}