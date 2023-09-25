import Image from "next/image";

import Accordion from "../UI/Accordion";

const Services = () => {
  const dictionary = {
    title: "Servicios",
  };

  const items = [
    {
      path: "/images/placeholdercard.jpeg",
      alt: "electronics board",
      title: "Desarrollo de sistemas embebeidos para IoT",
      content:
        "Somos especialistas en el diseño de hardware y software para comunicaciones inalámbricas.",
      list: ["Sensores", "Actudadores", "Gateways", "Router"],
    },
    {
      path: "/images/placeholdercard.jpeg",
      alt: "telecommunications tower",
      title: "Despliegue de redes IoT bajo demanda",
      content:
        "Contamos con herramientas de modelado y simulación de radiofrecuencia para:",
      list: [
        "Seleccionar el protocolo idóneo.",
        "Dimensionar las necesidades técnicas.",
        "Implementar en campo optimizando los recursos.",
        "Operar y dar mantenimiento a la red de comunicaciones.",
      ],
    },
    {
      path: "/images/placeholdercard.jpeg",
      alt: "map with pins",
      title: "Plataforma de monitoreo y control",
      content:
        "Brindamos una solución integral de monitoreo y control de tus dispositivos  desde una plataforma centralizada.",
      list: [
        "Generación de reportes.",
        "Construcción de dashboards.",
        "Control de dispositivos.",
        "Automatización de la operación.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-[1440px] m-auto flex flex-col justify-center gap-4 py-20">
      <h6 className="text-center text-4xl font-semibold leading-10 pb-8">
        {dictionary.title}
      </h6>
      <div className="w-full flex justify-between shrink-0">
        <div className="w-1/2">
          <Accordion items={items} />
        </div>
        <div className="w-1/2 flex justify-center items-start">
          <Image
            src="/graphics/drones.png"
            alt="REPLACE ME"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
