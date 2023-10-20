"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import Accordion from "@components/UI/Accordion";
import dictionary from "@public/translate/home/es.json";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export const Services = () => {
  return (
    <SectionWrapper padding="lg:py-36 md:py-28 py-20" appearOnScroll>
      <div className="flex flex-col gap-16">
        <Title title={dictionary.services.title} />
        <div className="w-full flex lg:flex-row flex-col-reverse gap-16 shrink-0">
          <div className="w-full lg:w-1/2">
            <Accordion items={dictionary.services.items} />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-start">
            <AspectRatio.Root ratio={17 / 10}>
              <Image
                src={dictionary.services.image.path}
                alt={dictionary.services.image.alt}
                layout="fill"
                className="rounded-xl"
              />
            </AspectRatio.Root>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
