import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

interface Props {
  slides: string[];
}

export default function ImageCarousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className="w-full relative">
      <>
        <button
          aria-label="go to previous slide"
          onClick={handlePrevious}
          className="bg-cornflower-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4"
        >
          <DoubleArrowLeftIcon />
        </button>
        <button
          aria-label="go to next slide"
          onClick={handleNext}
          className="bg-cornflower-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4"
        >
          <DoubleArrowRightIcon />
        </button>
      </>
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex ">
          {slides.map((slideUrl, index) => (
            <div key={index} className="flex-[0_0_100%] aspect-video mx-4">
              <div key={index} className="w-full rounded-3xl relative">
                <AspectRatio.Root ratio={16 / 9}>
                  <Image
                    src={slideUrl}
                    alt=""
                    layout="fill"
                    className="rounded-xl"
                  />
                </AspectRatio.Root>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
