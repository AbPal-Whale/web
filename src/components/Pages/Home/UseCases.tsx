"use client";

import TabsCustom from "@/components/TabSelect";
import SectionWrapper from "@components/SectionWrapper";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";

export const UseCases = () => {
  return (
    <SectionWrapper background="bg-astronaut-500">
      <div className="flex flex-col gap-24">
        <Title title={dictionary.useCases.title} className="text-white" />
        <TabsCustom tabs={dictionary.useCases.items} />
      </div>
    </SectionWrapper>
  );
};

export default UseCases;
