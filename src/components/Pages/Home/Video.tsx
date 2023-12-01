"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export const Video = () => {
  const videoId = "MisxnvjB0mU";
  return (
    <SectionWrapper>
      <div className="w-full flex lg:flex-row flex-col-reverse gap-16 shrink-0">
        <div className="w-full lg:w-1/2">
          <AspectRatio.Root ratio={16 / 9}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={dictionary.video.title}
            />
          </AspectRatio.Root>
        </div>
        <div className="w-full lg:w-1/2 my-auto">
          <Title title={dictionary.video.title} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Video;
