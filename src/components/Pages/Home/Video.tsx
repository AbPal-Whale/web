import dictionary from "@public/translate/home/es.json";
import Title from "@components/Typography/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";

const Services = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-16">
        <div className="w-full flex gap-16 shrink-0">
          <div className="w-1/2 bg-[#C4DEFD]">
            <div className="w-[48rem] h-[24rem]"></div>
          </div>
          <div className="w-1/2 my-auto">
            <Title title={dictionary.video.title} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
