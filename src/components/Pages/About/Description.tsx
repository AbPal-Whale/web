import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

const Description = () => {
  return (
    <SectionWrapper padding="py-20">
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-end gap-4 justify-self-end">
          <div className="w-[247px] h-[259px] bg-[#C4DEFD] rounded-3xl" />
          <div className="w-[288px] h-[346px] bg-[#C4DEFD] rounded-3xl" />
        </div>
        <div className="w-[521px] h-full flex flex-col justify-center gap-5">
          <h6 className={typography.H4}>{dictionary.aboutUs}</h6>
          <p className={typography.H6}>{dictionary.description}</p>
        </div>
        <div className="justify-self-end">
          <div className="w-[521px] h-[346px] bg-[#C4DEFD] rounded-3xl" />
        </div>
        <div className="justify-self-start">
          <div className="w-[521px] h-[346px] bg-[#C4DEFD] rounded-3xl" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Description;
