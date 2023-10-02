"use client";

import Button from "@components/UI/Button";
import NavBar from "@components/UI/NavBar";
import dictionary from "@public/translate/header/es.json";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const items = [
    { name: dictionary.about, href: "/about" },
    { name: dictionary.products, href: "/products" },
    { name: dictionary.services, href: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cx(
        "w-full sticky top-0 z-10 transition-transform duration-300",
        "border-b bg-white",
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      <div
        className={cx(
          "w-full max-w-[1480px] m-auto",
          "flex justify-between items-center py-4",
          showHeader ? "transform translate-y-0" : "transform -translate-y-full"
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
