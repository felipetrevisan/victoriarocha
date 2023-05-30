import { Videos as Content } from "@/components/Sections/Videos";
import { VideosResponse } from "@/types/videos";
// import { useApp } from "@/hooks/useApp";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef } from "react";

export default async function Videos() {
  const videosResponse = await fetch(`https://api.vimeo.com/users/${process.env.VIMEO_USER_ID}/videos`, {
    headers: { 
      'Accept': 'application/json', 
      'Authorization': `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`
    }
  });

  const videos: VideosResponse = await videosResponse.json();

  // const pathName = usePathname();
  // const refVideo = useRef<HTMLDivElement>(null);
  
  // const { setCurrentSection, getSection } = useApp();

  // useEffect(() => {
  //   setCurrentSection(getSection(pathName));
  // }, [getSection, pathName, setCurrentSection]);
  return (
    <section
      // ref={refVideo}
      className="py-32 px-10 sm:py-16 md:py-32"
      data-section="videos"
    >
      <Content data={videos.data} />
    </section>
  );
}