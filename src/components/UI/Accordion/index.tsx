"use client";

import typography from "@/components/Typography";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import React from "react";

interface Item {
  title: string;
  content: string;
  list: string[];
}

interface Props {
  items: Item[];
}

const AccordionDemo = ({ items }: Props) => (
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
        className={cx(
          "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 shadow-[0_2px_10px] shadow-black/5",
          "data-[state=open]:border border data-[state=open]:border-curious-blue-500",
          "ease-in-out transition-border duration-300",
          "rounded-lg p-8 shadow-md"
        )}
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger
            className={cx(
              "w-full flex items-center justify-between group flex-1",
              typography.button
            )}
          >
            {item.title}
            <div
              className={cx(
                "ease-in-out transition-bg duration-300 text-curious-blue-500 rounded-full p-4",
                "group-data-[state=open]:bg-curious-blue-500 group-data-[state=open]:border-none border border-curious-blue-500",
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
          className={cx(
            "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
          )}
        >
          <p>{item.content}</p>
          <ul className="list-disc pl-5">
            {item.list.map((listItem, index) => (
              <li key={"service-card-" + index + "-list-item"}>{listItem}</li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default AccordionDemo;
