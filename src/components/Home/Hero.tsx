import Link from "next/link";

import Button from "../UI/Button";

const Hero = () => {
  const dictionary = {
    label: ["Soluciones para ", "el internet de las cosas ", "a la medida."],
    contact: "Contáctanos",
    more: "Ver más",
  };

  return (
    <section className="bg-curious-blue-500 bg-opacity-10">
      <div className="w-full max-w-[1440px] m-auto flex justify-center gap-12 pt-32 pb-40">
        <div className="w-1/2">
          <h1 className="text-5xl leading-[60px] font-semibold max-w-lg break-words">
            {dictionary.label[0]}
            <span className="text-curious-blue-500">{dictionary.label[1]}</span>
            {dictionary.label[2]}
          </h1>
          <div className="flex gap-4 pt-16">
            <Link href="/contact-us">
              <Button className="min-w-[200px]">{dictionary.contact}</Button>
            </Link>
            <Button variant="secondary" className="min-w-[200px]">
              {dictionary.more}
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          [GRAPHIC HERE]
        </div>
      </div>
    </section>
  );
};

export default Hero;
