"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Card from "../UI/Card";

const Applications = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const items = [
    {
      title: "Agronomia",
      image: {
        path: "/images/farmer.jpg",
        alt: "Agronomia",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis aliquam ultricies, nisl nisl ultricies nisl, quis aliquam ultricies nisl nisl nisl.",
    },
    {
      title: "Agua potable",
      image: {
        path: "/images/water.jpeg",
        alt: "Agua potable",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis aliquam ultricies, nisl nisl ultricies nisl, quis aliquam ultricies nisl nisl nisl.",
    },
    {
      title: "Electricidad",
      image: {
        path: "/images/electricity.jpg",
        alt: "Electricidad",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis aliquam ultricies, nisl nisl ultricies nisl, quis aliquam ultricies nisl nisl nisl.",
    },
  ];

  return (
    <section className="bg-curious-blue-500 bg-opacity-10">
      <div className="w-full max-w-[1440px] m-auto flex flex-col justify-center gap-4 py-20 embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="w-full flex gap-10 embla__container px-10">
            {items.map((item, index) => (
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
                        <p className="text-white text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-10 py-3">
                      <label
                        htmlFor={"application-card-" + index}
                        className="text-base font-semibold leading-6"
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
    </section>
  );
};

export default Applications;
