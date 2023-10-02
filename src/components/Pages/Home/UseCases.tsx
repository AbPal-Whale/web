"use client";

import Card from "@components/UI/Card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SectionWrapper from "@components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";
import classnames from "classnames";
import typography from "@components/Typography";

const UseCases = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <SectionWrapper background="bg-astronaut-500">
      <div className="flex flex-col gap-24 embla">
        <Title title={dictionary.useCases.title} className="text-white" />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="w-full flex gap-10 embla__container px-10">
            {dictionary.useCases.items.map((item, index) => (
              <div className="embla__slide" key={"application-card-" + index}>
                <Card key={"application-card-" + index}>
                  <div className="max-w-3xl p-2">
                    <div className="flex-shrink-0 w-[744px] h-[376px] relative">
                      <Image
                        src={item.image.path}
                        alt={item.image.alt}
                        layout="fill"
                        objectFit="fill"
                        className="rounded-xl"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                        <p
                          className={classnames("text-white", typography.body)}
                        >
                          <ul className="list-disc pl-5">
                            {item.description.map((listItem, index) => (
                              <li
                                className="py-0.5"
                                key={
                                  "use-case-item-" + index + "-description-item"
                                }
                              >
                                <strong>{listItem}</strong>
                              </li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-center py-3 pb-1">
                      <label
                        htmlFor={"application-card-" + index}
                        className={typography.button}
                      >
                        {item.title}
                      </label>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UseCases;
