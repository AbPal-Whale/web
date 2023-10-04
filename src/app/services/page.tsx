import Button from "@components/UI/Button";
import Link from "next/link";
import dictionary from "@public/translate/services/es.json";
import typography from "@components/Typography";
import SectionWrapper from "@components/SectionWrapper";
import ServicesCard from "@/components/ServicesCard";
import Title from "@/components/Typography/SectionTitle";
import cx from "classnames";

const Services = () => {
  return (
    <div className="relative">
      <SectionWrapper background="bg-astronaut-500" padding="pt-36 pb-72">
        <div className="text-white flex flex-col gap-6 max-w-md mx-auto text-center">
          <div className="w-32 h-32 rounded-full bg-white text-center text-black self-center">
            Icon
          </div>
          <h3 className={typography.H3}>{dictionary.title}</h3>
          <p className={typography.body}>{dictionary.description}</p>
        </div>
      </SectionWrapper>
      <div className="relative w-full max-w-4xl mx-auto pb-32">
        <div className="w-full max-w-4xl mx-auto absolute -top-52">
          <ServicesCard />
        </div>
      </div>
      <SectionWrapper>
        <div className="w-full flex gap-8 justify-center items-center">
          <div className="w-1/3 h-[28rem] border border-golden-glow-500 rounded-lg p-10 flex flex-col gap-6">
            <h6 className={typography.H6}>
              <strong>{dictionary.renovacionIoT.title}</strong>
            </h6>
            <ul className="list-disc pl-5 text-shark-500">
              {dictionary.renovacionIoT.services.map((service, index) => (
                <li
                  className="py-1"
                  key={"redesIoT-item-" + index + "-redesIoT-item"}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 h-[35rem] border border-astronaut-glow-500 rounded-lg px-10 py-20 bg-astronaut-500 text-white flex flex-col gap-6">
            <h6 className={typography.H6}>
              <strong>{dictionary.redesIoT.title}</strong>
            </h6>
            <ul className="list-disc pl-5">
              {dictionary.redesIoT.services.map((service, index) => (
                <li
                  className="py-1"
                  key={"redesIoT-item-" + index + "-redesIoT-item"}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 h-[32rem] border border-golden-glow-500 rounded-lg p-10 flex flex-col gap-6">
            <h6 className={typography.H6}>
              <strong>{dictionary.solucionesMedida.title}</strong>
            </h6>
            <ul className="list-disc pl-5 text-shark-500">
              {dictionary.solucionesMedida.services.map((service, index) => (
                <li
                  className="py-1"
                  key={"redesIoT-item-" + index + "-redesIoT-item"}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;
