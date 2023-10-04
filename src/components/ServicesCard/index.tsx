import dictionary from "@public/translate/about/es.json";

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-2 gap-14 p-16 shadow-2xl bg-white">
      <div className="flex gap-7 items-center">
        <div className="w-20 h-20 rounded-3xl bg-[#E2F3FF] flex justify-center items-center">
          ICON
        </div>
        {dictionary.services[0]}
      </div>
      <div className="flex gap-7 items-center">
        <div className="w-20 h-20 rounded-3xl bg-[#F1E8FF] flex justify-center items-center">
          ICON
        </div>
        {dictionary.services[1]}
      </div>
      <div className="flex gap-7 items-center">
        <div className="w-20 h-20 rounded-3xl bg-[#FFE7FB] flex justify-center items-center">
          ICON
        </div>
        {dictionary.services[2]}
      </div>
    </div>
  );
};

export default ServicesCard;
