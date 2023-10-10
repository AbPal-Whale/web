import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

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
          <div className="w-[521px] h-[346px] bg-[#C4DEFD] rounded-3xl" />
        </div>
        <div className="justify-self-start">
          <div className="w-[521px] h-[346px] bg-[#C4DEFD] rounded-3xl" />
        </div>
      </div>
      <div className="md:hidden block">
        <div className="justify-self-end">
          <div className="w-full h-[280px] bg-[#C4DEFD] rounded-3xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DescriptionMobile;
