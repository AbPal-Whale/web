"use client";

import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface Item {
  title: string;
  content: string;
  list: string[];
}

interface Props {
  items: Item[];
}

const CustomAccordion = ({ items }: Props) => (
  <Accordion.Root
    className="w-full flex flex-col gap-7"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((item, index) => (
      <Accordion.Item
        value={"accordion-item-" + index}
        key={"accordion-item-" + index}
        className={classNames(
          "ease-in-out transition-border duration-300",
          "data-[state=open]:border border data-[state=open]:border-curious-blue-500",
          "rounded-lg p-8 shadow-md"
        )}
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger
            className={classNames(
              "w-full flex items-center justify-between group flex-1 cursor-default"
            )}
          >
            <label className="text-2xl font-medium leading-7 break-words">
              {item.title}
            </label>
            <div
              className={classNames(
                "ease-in-out transition-bg duration-300 text-curious-blue-500 rounded-full p-4",
                "group-data-[state=open]:bg-curious-blue-500 group-data-[state=open]:border-none border",
                "group-data-[state=open]:text-white"
              )}
            >
              <ChevronRightIcon
                className="ease-in-out transition-transform duration-300 group-data-[state=open]:rotate-90"
                aria-hidden
              />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          className={classNames(
            "ease-in-out transition-transform duration-300"
          )}
        >
          <p className="text-lg font-normal leading-7 break-words text-fuscous-gray-500 pt-5">
            {item.content}
          </p>
          <p className="text-lg font-normal leading-7 break-words text-fuscous-gray-500 pt-5">
            <ul className="list-none">
              {item.list.map((listItem, index) => (
                <li
                  key={"service-card-" + index + "-list-item"}
                  className="relative pl-5"
                >
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl">
                    •
                  </span>
                  {listItem}
                </li>
              ))}
            </ul>
          </p>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default CustomAccordion;
