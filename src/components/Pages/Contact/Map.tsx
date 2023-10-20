import LineVertical from "@/components/Icons/LineVertical";
import SectionWrapper from "@/components/SectionWrapper";
import Socials from "@/components/Socials";
import PhoneIcon from "@components/Icons/Phone";
import PinIcon from "@components/Icons/Pin";
import typography from "@components/Typography";
import dictionary from "@public/translate/contact/es.json";
import Image from "next/image";

const Map = () => {
  const PHONE = "+94 4444";
  return (
    <SectionWrapper padding="pb-14">
      <div className="flex flex-col gap-14">
        <div className="flex md:flex-row flex-col md:pt-0 pt-10">
          <div className="w-full md:w-1/2 flex md:justify-start justify-center items-center md:text-start">
            <h3 className={typography.H3}>{dictionary.letsCollaborate}</h3>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/map.webp"
              alt="world map in dots"
              width={1200}
              height={1500}
            />
          </div>
        </div>
        <div className="hidden md:flex justify-between">
          <div className="lg:w-1/4 w-1/5 px-2 flex flex-col gap-5 justify-center items-start">
            <p className={typography.body}>{dictionary.followUs}</p>
            <Socials />
          </div>
          <div>
            <LineVertical />
          </div>
          <div className="lg:w-1/4 w-2/5 px-2 flex gap-6 justify-center items-center">
            <PhoneIcon width={30} height={30} />
            <p className={typography.body}>{dictionary.phone}</p>
          </div>
          <div>
            <LineVertical />
          </div>
          <div className="lg:w-1/4 w-2/5 px-2 flex gap-6 justify-center items-center break-words">
            <PinIcon width={60} height={60} />
            <p className={typography.body}>{dictionary.address}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Map;
