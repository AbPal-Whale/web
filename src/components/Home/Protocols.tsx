import Image from "next/image";

const Protocols = () => {
  const dictionary = {
    title: "Protocolos de comunicación",
  };

  const items = [
    {
      path: "/images/logos/lorawan.png",
      alt: "Logo de LoRaWAN",
    },
    {
      path: "/images/logos/wisun.png",
      alt: "Logo de Wi-SUN",
    },
    {
      path: "/images/logos/sigfox.png",
      alt: "Logo de Sigfox",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] m-auto flex flex-col justify-center gap-4">
      <h6 className="text-center text-2xl font-medium leading-10">
        {dictionary.title}
      </h6>
      <div className="w-full flex justify-between shrink-0">
        {items.map((item, index) => (
          <div
            className="flex-shrink-0 w-48 h-48 relative hover:opacity-80 hover:w-52 hover:h-52 transition-all"
            key={"protocol-logo-" + index}
          >
            <Image
              src={item.path}
              alt={item.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protocols;
