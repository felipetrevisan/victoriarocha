import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";

import { Works } from "@/components/Sections/Works";
import { ImageProps } from "@/components/Sections/Works/types";
import { Tabs } from "@/components/Sections/Works/Tabs";
import { Oswald } from "next/font/google";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
// import { useApp } from "@/hooks/useApp";
import { format } from "util";
import { Title } from "@/components/Sections/Title";
// import { useRouter } from "next/router";

const oswald = Oswald({ subsets: ["latin"] });

export default async function Books() {
  // const refBook = useRef<HTMLDivElement>(null);
  // const pathName = usePathname();
  // const refBook = useRef<HTMLDivElement>(null);
  //const router = useRouter();

  // const { setCurrentSection, getSection } = useApp();

  // useEffect(() => {
  //   setCurrentSection(getSection(pathName));
  // }, [getSection, pathName, setCurrentSection]);

  //console.log(router);

  const s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION,
    // Unless you have a public bucket, you'll need access to a private bucket.
    // One way to do this is to create an Amazon Cognito identity pool, attach a role to the pool,
    // and grant the role access to the 's3:GetObject' action.
    //
    // You'll also need to configure the CORS settings on the bucket to allow traffic from
    // this example site. Here's an example configuration that allows all origins. Don't
    // do this in production.
    //[
    //  {
    //    "AllowedHeaders": ["*"],
    //    "AllowedMethods": ["GET"],
    //    "AllowedOrigins": ["*"],
    //    "ExposeHeaders": [],
    //  },
    //]
    credentials: fromEnv(),
    //
  });

  const { Contents } = await s3.send(
    new ListObjectsCommand({ Bucket: "victoriarocha" })
  );

  const results = Contents!;

  const reducedImages = () => {
    let reducedResults: ImageProps[] = [];

    let index = 0;

    for (let result of results) {
      if (result.Size) {
        reducedResults.push({
          id: index,
          key: result.ETag?.replaceAll('"', ""),
          url: format(
            process.env.AWS_S3_OBJECT_URL,
            "victoriarocha",
            process.env.AWS_DEFAULT_REGION,
            result.Key
          ),
          blurDataUrl: "",
        });

        index++;
      }
    }

    return reducedResults;
  };

  const reduceImages = reducedImages();

  const blurImagePromises = reduceImages.map((image) =>
    getBase64ImageUrl(image)
  );

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reduceImages.length; i++) {
    reduceImages[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return (
    <section
      className="py-28 px-2 sm:py-16 md:py-28 min-h-screen"
      data-section="book"
    >
      <div className="container scroll-smooth">
        <div className="container flex flex-col max-sm::items-center justify-center md:lg:justify-start">
          <div className="flex flex-wrap items-center justify-center">
            <Title content="Books" />
          </div>
          {/* <div className="lg:w-3/4 mx-auto">
            <Title content="Books" /> */}
            {/* {currentViewPhoto && (
              <Modal
                images={reduceImages}
                onClose={() => {
                  setLastViewedPhoto(+currentViewPhoto);
                }}
              />
            )} */}

            <Works images={reduceImages} itemsPerPage={8} />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
