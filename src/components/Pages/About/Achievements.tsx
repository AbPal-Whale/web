import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";

export const Achievements = () => {
  return (
    <SectionWrapper
      background="bg-astronaut-500"
      padding="md:py-28 py-20"
      appearOnScroll
    >
      <div className="flex md:flex-row flex-col gap-10 justify-evenly text-white text-center">
        <div className="flex flex-col gap-4">
          <h1 className={typography.H2}>WISUN</h1>
          <p className={typography.bodySmall}>
            {dictionary.achievements.items[0]}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className={typography.H2}>+1,000</h1>
          <p className={typography.bodySmall}>
            {dictionary.achievements.items[1]}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
