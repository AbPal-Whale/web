import classNames from "classnames";

import Button from "../UI/Button";

const IOT = () => {
  const dictionary = {
    title: ["¿Qué es el ", "Internet de las Cosas", "?"],
    label: [
      "El Internet de las Cosas (o IoT por sus siglas en inglés) es una tendencia mundial a ",
      "conectar cualquier dispositivo a internet ",
      "- o a un servidor centralizado - con la finalidad de ",
      "controlar y/o monitorear ",
      "dicho dispositivo de manera remota.",
    ],
    more: "Ver más",
  };

  return (
    <div className="w-full max-w-[1440px] m-auto flex justify-center gap-12 pt-32 pb-40">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold leading-[50px] pb-8">
          {dictionary.title[0]}
          <span className="text-curious-blue-500">{dictionary.title[1]}</span>
          {dictionary.title[2]}
        </h2>
        <p className="text-base font-normal leading-7 break-words text-fuscous-gray-500">
          {dictionary.label.map((text, index) => (
            <span
              key={"iot-text-" + index}
              className={classNames(
                "text-base leading-7",
                index % 2 !== 0 ? "font-bold" : "font-normal"
              )}
            >
              {text}
            </span>
          ))}
        </p>
        <div className="flex gap-4 pt-16">
          <Button variant="secondary" className="min-w-[200px]">
            {dictionary.more}
          </Button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        [GRAPHIC HERE]
      </div>
    </div>
  );
};

export default IOT;
