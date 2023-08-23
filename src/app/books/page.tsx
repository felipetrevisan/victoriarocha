import { format } from "util";
import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";

import { Books as Works } from "@/components/Sections/Books";
import { ImageProps } from "@/components/Sections/Books/types";

import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { Title } from "@/components/Title";

export default async function Books() {
  const s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: fromEnv(),
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
      id="books"
      className="section relative my-32 flex min-h-screen justify-center"
    >
      <div className="container flex flex-col justify-center max-sm:items-center md:lg:justify-start">
        <Works images={reduceImages} itemsPerPage={20} />
      </div>
    </section>
  );
}
