import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

const Mission = () => {
  return (
    <SectionWrapper padding="py-20">
      <div className="w-2/3 h-full flex flex-col justify-center gap-5">
        <h6 className={typography.H4}>{dictionary.mission.title}</h6>
        <p className={typography.H6}>{dictionary.mission.description}</p>
      </div>
    </SectionWrapper>
  );
};

export default Mission;
