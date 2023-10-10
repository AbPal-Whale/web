import SectionWrapper from "@components/SectionWrapper";
import typography from "@components/Typography";
import Button from "@components/UI/Button";
import dictionary from "@public/translate/home/es.json";
import Link from "next/link";

export const Hero = () => {
  return (
    <SectionWrapper background="bg-astronaut-500">
      <div className="w-full flex lg:flex-row flex-col gap-12">
        <div className="lg:w-1/2 w-full flex flex-col gap-14 justify-center">
          <div className="flex flex-col gap-6 text-white md:text-start text-center">
            <h1 className={typography.H2}>{dictionary.banner.title}</h1>
            <p className={typography.H6}>{dictionary.banner.description}</p>
            <p className={typography.H6}>{dictionary.banner.details}</p>
          </div>
          <div className="flex gap-4 ">
            <Link href="/contact">
              <Button>{dictionary.banner.contact}</Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#C4DEFD]">
          a
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
