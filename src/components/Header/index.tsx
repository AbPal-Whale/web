import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Button";
import NavBar from "../UI/NavBar";

const Header = () => {
  const dictionary = {
    about: "Nosotros",
    products: "Productos",
    services: "Servicios",
    solutions: "Soluciones",
    contact: "Contacto",
    logoAlt: "Whalecomm logo",
  };

  const items = [
    { name: dictionary.about, href: "/about" },
    { name: dictionary.products, href: "/products" },
    { name: dictionary.services, href: "/services" },
    { name: dictionary.solutions, href: "/solutions" },
  ];

  return (
    <header
      className={classnames(
        "flex justify-between items-center px-8 py-4",
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
    </header>
  );
};

export default Header;
