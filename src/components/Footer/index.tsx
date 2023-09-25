import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import LinkedinIcon from "../Icons/LinkedIn";
import WhatsAppIcon from "../Icons/WhatsApp";

const Footer = () => {
  const dictionary = {
    copyright: "Copyright © {{CURRENT_YEAR}} WhaleComm. All rights reserved.",
    logoAlt: "Whalecomm logo",
    address: [
      "Monte Everest #210",
      "Col. Lomas de Chapultepec",
      "Miguel Hidalgo, C.P. 11000",
      "Ciudad de México, México",
    ],
    phone: "(+52) 333 662 2171",
    email: "contacto@whalecomm.io",
    terms: "Términos y condiciones",
    privacy: "Aviso de privacidad",
    contact: "Contáctanos",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={classnames(
        "flex flex-col justify-between items-center",
        "border-b bg-white"
      )}
    >
      <div className="w-full flex justify-evenly pt-20 pb-14">
        <div>
          <Image
            src="/images/logos/whalecommBlack.png"
            alt={dictionary.logoAlt}
            width={100}
            height={100}
          />
        </div>
        <div className="text-base font-normal leading-7 text-fuscous-gray-500 break-words">
          <p>
            {dictionary.address.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <br />
          <p>{dictionary.phone}</p>
          <Link href="mailto:contacto@whalecomm.io">{dictionary.email}</Link>
        </div>
        <div className="text-base font-normal leading-7 text-fuscous-gray-500 break-words">
          <p>
            <Link href="/legal/terms-of-service">{dictionary.terms}</Link>
          </p>
          <br />
          <p>
            <Link href="/legal/privacy-policy">{dictionary.privacy}</Link>
          </p>
          <br />
          <p>
            <Link href="/contact">{dictionary.contact}</Link>
          </p>
        </div>
        <div className="h-full flex justify-end">
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
      </div>
      <div className="w-full border border-b" />
      <div className="w-full text-center py-7">
        <p className="text-xs font-normal leading-6 text-fuscous-gray-400">
          {dictionary.copyright.replace(
            "{{CURRENT_YEAR}}",
            currentYear.toString()
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
