import SectionWrapper from "@/components/SectionWrapper";
import ServicesCard from "@/components/ServicesCard";
import typography from "@/components/Typography";
import Button from "@/components/UI/Button";
import dictionary from "@public/translate/about/es.json";
import Link from "next/link";

export const Specialization = () => {
  return (
    <SectionWrapper appearOnScroll>
      <div className="w-full flex md:flex-row flex-col md:gap-5 gap-10">
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="h-full flex flex-col justify-center md:text-start text-center md:items-start items-center gap-5">
            <h6 className={typography.H4}>{dictionary.specialization.title}</h6>
            <p className={typography.H6}>
              {dictionary.specialization.description}
            </p>
            <Link href="/contact" className="pt-10">
              <Button>{dictionary.contact}</Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 h-full my-auto">
          <ServicesCard useCols />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Specialization;
