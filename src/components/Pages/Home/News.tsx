"use client";

import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import Title from "@/components/Typography/SectionTitle";
import LinkButton from "@/components/UI/Button/Link";
import dictionary from "@public/translate/home/es.json";
import { FileTextIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const News = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <SectionWrapper appearOnScroll>
      <div className="flex flex-col gap-24 overflow-hidden">
        <Title title={dictionary.newsCarousel.title} />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="w-full flex gap-10 embla__container px-10">
            {dictionary.newsCarousel.links.map((link, index) => (
              <div
                className="embla__slide flex flex-col justify-between"
                key={"application-card-" + index}
              >
                <div className="flex flex-col gap-5">
                  {link.type === "url" ? (
                    <div className="w-[332px] h-[200px] rounded-3xl relative">
                      <Image
                        src={"/images/news/" + index + ".jpg"}
                        alt={link.title}
                        fill
                        className="rounded-xl"
                        objectFit="cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[332px] h-[200px] rounded-3xl bg-astronaut-500 text-white relative flex justify-center items-center">
                      <FileTextIcon aria-hidden width={100} height={100} />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className={cx(typography.body)}>
                      <strong>{link.title}</strong>
                    </p>
                    <p className={cx(typography.bodySmall)}>
                      {link.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <LinkButton
                    url={link.url}
                    label={dictionary.newsCarousel.more}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default News;
