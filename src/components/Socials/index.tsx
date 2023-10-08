import WhatsAppIcon from "@/components/Icons/WhatsApp";
import LinkedinIcon from "@components/Icons/LinkedIn";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-4">
      <Link
        href="https://api.whatsapp.com/send?phone=5213336622171&text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20WhaleComm%2C%C2%A0por%C2%A0favor."
        target="_blank"
        className="p-3 border rounded-full shadow-md hover:shadow-lg"
      >
        <WhatsAppIcon width={16} height={16} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/whalecomm"
        target="_blank"
        className="p-3 border rounded-full shadow-md hover:shadow-lg"
      >
        <LinkedinIcon width={16} height={16} />
      </Link>
    </div>
  );
};

export default Socials;
