import Button from "@components/UI/Button";
import Link from "next/link";
import dictionary from "@public/translate/home/es.json";
import typography from "@components/Typography";
import SectionWrapper from "@components/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper background="bg-astronaut-500">
      <div className="w-full flex gap-12">
        <div className="w-1/2 flex flex-col gap-14 justify-center">
          <div className="flex flex-col gap-6 text-white">
            <h1 className={typography.H1}>{dictionary.banner.title}</h1>
            <p className={typography.H6}>{dictionary.banner.description}</p>
            <p className={typography.H6}>{dictionary.banner.details}</p>
          </div>
          <div className="flex gap-4 ">
            <Link href="/contact">
              <Button>{dictionary.banner.contact}</Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center bg-[#C4DEFD]"></div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
