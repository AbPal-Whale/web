import cx from "classnames";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  description: string;
}

const Animated = ({ image, name, description }: Props) => {
  return (
    <div
      className={cx(
        "relative group cursor-pointer group overflow-hidden text-gray-50 h-[32rem] w-[28rem]",
        "rounded-2xl hover:duration-700 duration-700 shadow-2xl border-2 border-astronaut-500"
      )}
    >
      <div className="relative w-[28rem] h-[28rem] bg-white">
        <Image fill src={image} alt="" />
      </div>
      <div className="absolute text-white bg-astronaut-500 -bottom-[15rem] w-[28rem] h-[20rem] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="font-bold text-3xl">{name}</span>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Animated;
