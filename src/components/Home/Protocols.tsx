import Image from "next/image";
import dictionary from "@public/translate/home/es.json";
import cx from "classnames";
import typography from "@components/Typography";
import SectionWrapper from "@components/SectionWrapper";
import CustomHoverCard from "@components/UI/HoverCard";
import Button from "@components/UI/Button";
import Title from "@components/Typography/SectionTitle";

const Protocols = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-24">
        <Title title={dictionary.protocols.title} />
        <div className="w-full flex justify-between shrink-0">
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
                {" "}
                <div className="flex flex-col gap-6">
                  <p className={typography.body}>{item.description}</p>
                  <div className="flex justify-end">
                    <Button variant="text">{item.link}</Button>
                  </div>
                </div>
              </CustomHoverCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Protocols;
