import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";
import Image from "next/image";

export const Description = () => {
  return (
    <SectionWrapper padding="py-20" background="bg-white hidden lg:block">
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-end gap-4 justify-self-end">
          <div className="relative w-[247px] h-[259px] rounded-3xl">
            <Image
              src={dictionary.images.first}
              alt=""
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div className="relative w-[288px] h-[346px] rounded-3xl">
            <Image
              src={dictionary.images.second}
              alt=""
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-5">
          <h6 className={typography.H4}>{dictionary.aboutUs}</h6>
          <p className={typography.H6}>{dictionary.description}</p>
        </div>
        <div className="justify-self-end">
          <div className="relative w-[521px] h-[346px] rounded-3xl">
            <Image
              src={dictionary.images.third}
              alt=""
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="justify-self-start">
          <div className="relative w-[521px] h-[346px] rounded-3xl">
            <Image
              src={dictionary.images.fourth}
              alt=""
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Description;
