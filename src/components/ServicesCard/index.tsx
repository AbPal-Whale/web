import typography from "@/components/Typography";
import dictionary from "@public/translate/about/es.json";
import cx from "classnames";
import { use } from "react";

interface Props {
  useCols?: boolean;
}

const ServicesCard = ({ useCols = false }: Props) => {
  return (
    <div
      className={cx(
        "p-12 shadow-2xl bg-white",
        "flex",
        useCols
          ? "flex-col gap-6"
          : "md:flex-row md:justify-evenly md:gap-1 flex-col gap-6"
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-3xl bg-[#E2F3FF] flex justify-center items-center">
          ICON
        </div>
        <span className={cx(typography.body)}>{dictionary.services[0]}</span>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-3xl bg-[#F1E8FF] flex justify-center items-center">
          ICON
        </div>
        <span className={cx(typography.body)}>{dictionary.services[1]}</span>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-3xl bg-[#FFE7FB] flex justify-center items-center">
          ICON
        </div>
        <span className={cx(typography.body)}>{dictionary.services[2]}</span>
      </div>
    </div>
  );
};

export default ServicesCard;
