import Button from "@components/UI/Button";
import NavBar from "@components/UI/NavBar";
import dictionary from "@public/translate/header/es.json";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const items = [
    { name: dictionary.about, href: "/about" },
    { name: dictionary.products, href: "/products" },
    { name: dictionary.services, href: "/services" },
    { name: dictionary.solutions, href: "/solutions" },
  ];

  return (
    <header className="w-full max-w-[1480px] m-auto">
      <div
        className={cx(
          "flex justify-between items-center py-4",
          "border-b bg-white"
        )}
      >
        <Link href="/">
          <Image
            src="/images/logos/whalecommBlack.png"
            alt={dictionary.logoAlt}
            width={80}
            height={80}
          />
        </Link>
        <div className="flex gap-8">
          <NavBar items={items} />
          <Link href="/contact">
            <Button>{dictionary.contact}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
