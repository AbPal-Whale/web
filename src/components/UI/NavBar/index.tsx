"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import { usePathname } from "next/navigation";

interface NavBarItem {
  name: string;
  href: string;
}

interface Props {
  items: NavBarItem[];
}

const NavBar = ({ items }: Props) => {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="flex items-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          {items.map((item, index) => (
            <NavigationMenu.Link
              key={"nav-item-" + index}
              href={item.href}
              className={cx(
                pathname === item.href ? "text-curious-blue-500" : "text-black",
                "px-8 py-3 text-base font-normal leading-6 hover:text-curious-blue-500"
              )}
            >
              {item.name}
            </NavigationMenu.Link>
          ))}
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavBar;
