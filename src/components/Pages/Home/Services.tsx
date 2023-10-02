import Accordion from "@components/UI/Accordion";
import dictionary from "@public/translate/home/es.json";
import Title from "@components/Typography/SectionTitle";

const Services = () => {
  return (
    <section className="w-full max-w-[1480px] m-auto flex flex-col justify-center gap-4 py-20">
      <div className="flex flex-col gap-16">
        <Title title={dictionary.services.title} />
        <div className="w-full flex gap-16 shrink-0">
          <div className="w-1/2">
            <Accordion items={dictionary.services.items} />
          </div>
          <div className="w-1/2 flex justify-center items-center bg-[#C4DEFD]"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
