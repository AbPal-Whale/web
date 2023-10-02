"use client";

import Card from "@components/UI/Card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SectionWrapper from "@components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";
import typography from "@components/Typography";

const WhyIOT = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <Title title={dictionary.whyUseIoT.title} />
        <div className="flex flex-col gap-24">
          <p className={typography.H6}>{dictionary.whyUseIoT.description}</p>
          <div className="flex justify-evenly gap-5">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[0].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[0].description}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[1].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[1].description}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[2].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[2].description}
              </p>
            </div>
            {/* <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">
              {dictionary.whyUseIoT.benefits[3].title}
            </h2>
            <p className="text-gray-200">
              {dictionary.whyUseIoT.benefits[3].description}
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyIOT;
