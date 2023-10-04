import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

const Achievements = () => {
  return (
    <SectionWrapper background="bg-astronaut-500" padding="py-28">
      <div className="flex justify-evenly text-white text-center">
        <div>
          <h1 className={typography.H1}>WISUN</h1>
          <p className={typography.bodySmall}>
            {dictionary.achievements.items[0]}
          </p>
        </div>
        <div>
          <h1 className={typography.H1}>+1,000</h1>
          <p className={typography.bodySmall}>
            {dictionary.achievements.items[1]}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
