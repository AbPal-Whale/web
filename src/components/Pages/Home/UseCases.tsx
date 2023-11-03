"use client";

import TabsCustom from "@/components/TabSelect";
import SectionWrapper from "@components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";
import SelectCustom from "@/components/Select";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { useState } from "react";
import typography from "@/components/Typography";

export const UseCases = () => {
  const [mobileTab, setMobileTab] = useState(0);

  return (
    <SectionWrapper background="bg-astronaut-500" appearOnScroll>
      <div className="flex flex-col gap-24">
        <Title title={dictionary.useCases.title} className="text-white" />
        <div className="hidden lg:block">
          {/* Desktop */}
          <TabsCustom tabs={dictionary.useCases.items} />
        </div>
        <div className="bg-white block lg:hidden">
          <SelectCustom
            tabs={dictionary.useCases.items}
            onClick={(value: string) => {
              const index = dictionary.useCases.items.findIndex(
                (item) => item.title === value
              );
              setMobileTab(index);
            }}
          />
          {/* Mobile */}
          <div className="w-full flex-col-reverse lg:flex-row gap-5 bg-white">
            <div className="w-full lg:w-1/2 p-5">
              <p className={typography.body}>
                {dictionary.useCases.items[mobileTab].shortDescription}
              </p>
              <br />
              <p className={typography.body}>
                <ul className="list-disc pl-5">
                  {dictionary.useCases.items[mobileTab].description.map(
                    (listItem, index) => (
                      <li
                        className="py-0.5"
                        key={"use-case-item-" + index + "-description-item"}
                      >
                        {listItem}
                      </li>
                    )
                  )}
                </ul>
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <AspectRatio.Root ratio={16 / 8}>
                <Image
                  src={dictionary.useCases.items[mobileTab].image.path}
                  alt={dictionary.useCases.items[mobileTab].image.alt}
                  layout="fill"
                  className="rounded-xl"
                />
              </AspectRatio.Root>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UseCases;
