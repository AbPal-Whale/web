"use client";

import Button from "@components/UI/Button";
import NavBar from "@components/UI/NavBar";
import { Disclosure } from "@headlessui/react";
import dictionary from "@public/translate/header/es.json";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const items = [
    { name: dictionary.about, href: "/about" },
    { name: dictionary.products, href: "/products" },
    { name: dictionary.services, href: "/services" },
  ];

  const itemsMobile = [
    { name: dictionary.home, href: "/" },
    ...items,
    { name: dictionary.contact, href: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        "w-full sticky top-0 z-50 transition-transform duration-300",
        "border-b bg-white",
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      <Disclosure as="nav" className="bg-white shadow-sm">
        <>
          <div>
            <div
              className={cx(
                "w-full max-w-[1480px] m-auto px-8",
                "flex justify-between items-center py-4",
                showHeader
                  ? "transform translate-y-0"
                  : "transform -translate-y-full"
              )}
            >
              <Link href="/">
                <div className="hidden lg:block">
                  <Image
                    src="/images/logos/whalecommBlack.png"
                    alt={dictionary.logoAlt}
                    width={120}
                    height={120}
                  />
                </div>
                <div className="lg:hidden block">
                  <Image
                    src="/images/logos/whalecommBlack.png"
                    alt={dictionary.logoAlt}
                    width={80}
                    height={80}
                  />
                </div>
              </Link>
              <div className="hidden lg:flex gap-8">
                <NavBar items={items} />
                <Link href="/contact">
                  <Button>{dictionary.contact}</Button>
                </Link>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button
                  onClick={scrollToTop}
                  className="inline-flex1 items-center justify-center rounded-md bg-white p-2 text-cornflower-blue-400 hover:bg-cornflower-blue-100 hover:text-cornflower-blue-500"
                >
                  <DragHandleHorizontalIcon
                    aria-hidden
                    width={50}
                    height={50}
                  />
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {itemsMobile.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cx(
                    pathname === item.href
                      ? "bg-cornflower-blue-50 border-cornflower-blue-500 text-cornflower-blue-700"
                      : "border-transparent text-cornflower-blue-600 hover:bg-cornflower-blue-50 hover:border-cornflower-blue-300 hover:text-cornflower-blue-800",
                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      </Disclosure>
    </header>
  );
};

export default Header;
