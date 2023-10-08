import Socials from "@/components/Socials";
import dictionary from "@public/translate/footer/es.json";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="w-full border border-b" />
      <div
        className={cx(
          "w-full max-w-[1480px] m-auto px-8",
          "flex flex-col justify-between items-center",
          "border-b bg-white"
        )}
      >
        <div className="w-full flex justify-between pt-20 pb-14">
          <div className="flex justify-between items-start">
            <Image
              src="/images/logos/whalecommBlack.png"
              alt={dictionary.logoAlt}
              width={150}
              height={150}
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
            <Socials />
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
