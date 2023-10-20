import LinkButton from "@/components/UI/Button/Link";
import Card from "@/components/UI/Card";
import SectionWrapper from "@components/SectionWrapper";
import typography from "@components/Typography";
import Title from "@components/Typography/SectionTitle";
import CustomHoverCard from "@components/UI/HoverCard";
import dictionary from "@public/translate/home/es.json";
import Image from "next/image";

export const Protocols = () => {
  return (
    <SectionWrapper padding="lg:pt-36 md:pt-28 pt-20" appearOnScroll>
      <div className="flex flex-col gap-24">
        <Title title={dictionary.protocols.title} />
        <div className="w-full hidden lg:flex md:flex-row flex-col justify-between items-center shrink-0">
          {dictionary.protocols.items.map((item, index) => (
            <div
              className="flex-shrink-0 w-40 h-40 relative hover:opacity-80 hover:w-44 hover:h-w-44 transition-all"
              key={"protocol-logo-" + index}
            >
              <CustomHoverCard
                trigger={
                  <Image
                    src={item.path}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                }
              >
                <div className="flex flex-col gap-6">
                  <p className={typography.body}>{item.description}</p>
                  <div className="flex justify-end">
                    <LinkButton url="/" label={item.link} />
                  </div>
                </div>
              </CustomHoverCard>
            </div>
          ))}
        </div>
        <div className="w-full flex lg:hidden md:flex-row flex-col justify-between md:items-stretch items-center shrink-0 gap-2">
          {dictionary.protocols.items.map((item, index) => (
            <div
              key={"protocol-logo-" + index}
              className="w-80 p-4 flex flex-col justify-between bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ minHeight: "300px" }} // Set a minimum height based on your needs
            >
              <div className="flex flex-col gap-6">
                <div className="relative w-full h-40 pb-2">
                  <Image
                    src={item.path}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className={typography.body}>{item.description}</p>
              </div>
              <div className="flex justify-end">
                <LinkButton url="/" label={item.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Protocols;
