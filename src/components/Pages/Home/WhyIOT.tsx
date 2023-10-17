import SectionWrapper from "@components/SectionWrapper";
import typography from "@components/Typography";
import Title from "@components/Typography/SectionTitle";
import dictionary from "@public/translate/home/es.json";
import cx from "classnames";

export const WhyIOT = () => {
  return (
    <SectionWrapper appearOnScroll>
      <div className="flex flex-col gap-6">
        <Title title={dictionary.whyUseIoT.title} />
        <div className="flex flex-col gap-12">
          <div>
            <p className={cx(typography.H6, "text-center")}>
              {dictionary.whyUseIoT.description}
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-evenly gap-5">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white w-full lg:w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[0].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[0].description}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white w-full lg:w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[1].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[1].description}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white w-full lg:w-1/3">
              <h2 className="text-xl font-semibold mb-2">
                {dictionary.whyUseIoT.benefits[2].title}
              </h2>
              <p className="text-gray-200">
                {dictionary.whyUseIoT.benefits[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyIOT;
