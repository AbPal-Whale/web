import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Button";
import NavBar from "./NavBar";

const Header = () => {
  const items = [
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
  ];

  return (
    <header
      className={classnames(
        "flex justify-between items-center px-8 py-4",
        "border-b bg-white",
      )}
    >
      <Link href="/">
        <Image src="/images/logoBlack.png" alt="logo" width={80} height={80} />
      </Link>
      <div className="flex gap-8">
        <NavBar items={items} />
        <Link href="/contact-us">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
