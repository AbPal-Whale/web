import SectionWrapper from "@/components/SectionWrapper";
import ServicesCard from "@/components/ServicesCard";
import typography from "@/components/Typography";
import Button from "@/components/UI/Button";
import dictionary from "@public/translate/about/es.json";
import Link from "next/link";

const Specialization = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex">
        <div className="w-1/2">
          <div className="w-2/3 h-full flex flex-col justify-center gap-5">
            <h6 className={typography.H4}>{dictionary.specialization.title}</h6>
            <p className={typography.H6}>
              {dictionary.specialization.description}
            </p>
            <Link href="/contact" className="pt-10">
              <Button>{dictionary.contact}</Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <ServicesCard />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Specialization;
