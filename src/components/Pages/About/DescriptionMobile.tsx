import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";
import Image from "next/image";

export const DescriptionMobile = () => {
  return (
    <SectionWrapper
      padding="md:py-20 py-10"
      background="bg-white lg:hidden block"
    >
      <div className="w-full text-center pb-10">
        <div className="flex flex-col justify-center gap-5">
          <h6 className={typography.H4}>{dictionary.aboutUs}</h6>
          <p className={typography.H6}>{dictionary.description}</p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 gap-12">
        <div className="justify-self-end">
          <div className="relative w-full flex justify-center items-center h-[346px] rounded-3xl">
            <Image
              src={dictionary.images.third}
              alt=""
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="justify-self-start">
          <div className="relative w-full flex justify-center items-center h-[346px] rounded-3xl">
            <Image
              src={dictionary.images.fourth}
              alt=""
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="justify-self-end">
          <div className="relative w-full flex justify-center items-center h-[280px] rounded-3xl">
            <Image
              src={dictionary.images.fourth}
              alt=""
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DescriptionMobile;
