import WhatsAppIcon from "@/components/Icons/WhatsApp";
import typography from "@components/Typography";
import dictionary from "@public/translate/contact/es.json";
import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@components/Icons/LinkedIn";
import PhoneIcon from "@components/Icons/Phone";
import PinIcon from "@components/Icons/Pin";
import LineVertical from "@/components/Icons/LineVertical";

const Map = () => {
  const PHONE = "+94 4444";
  return (
    <div className="flex flex-col gap-14">
      <div className="flex">
        <div className="w-1/2 flex justify-start items-center">
          <h3 className={typography.H3}>{dictionary.letsCollaborate}</h3>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/map.png"
            alt="world map in dots"
            width={1200}
            height={1500}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/4 flex flex-col gap-5 justify-center items-start">
          <p className={typography.body}>{dictionary.followUs}</p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="p-3 border rounded-full shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon width={16} height={16} />
            </Link>
            <Link
              href="/"
              className="p-3 border rounded-full shadow-md hover:shadow-lg"
            >
              <LinkedinIcon width={16} height={16} />
            </Link>
          </div>
        </div>
        <div>
          <LineVertical />
        </div>
        <div className="w-1/4 flex gap-6 justify-center items-center">
          <PhoneIcon width={30} height={30} />
          <p className={typography.body}>{dictionary.phone}</p>
        </div>
        <div>
          <LineVertical />
        </div>
        <div className="w-1/4 flex gap-6 justify-center items-center break-words">
          <PinIcon width={60} height={60} />
          <p className={typography.body}>{dictionary.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
