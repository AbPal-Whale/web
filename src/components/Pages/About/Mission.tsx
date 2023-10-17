import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

export const Mission = () => {
  return (
    <SectionWrapper padding="py-20" appearOnScroll>
      <div className="w-full lg:w-2/3 h-full flex flex-col justify-center lg:items-start items-center gap-5">
        <h6 className={typography.H4}>{dictionary.mission.title}</h6>
        <p className={typography.H6}>{dictionary.mission.description}</p>
      </div>
    </SectionWrapper>
  );
};

export default Mission;
