import typography from "@/components/Typography";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import * as Tabs from "@radix-ui/react-tabs";
import cx from "classnames";
import Image from "next/image";

interface Props {
  tabs: {
    title: string;
    description: string[];
    image: {
      path: string;
      alt: string;
    };
  }[];
}

const TabsCustom = ({ tabs }: Props) => (
  <Tabs.Root defaultValue="tab-0" className="w-full shadow-[0_2px_10px]">
    <Tabs.List
      className="shrink-0 flex border-b border-curious-blue-500"
      aria-label={tabs.map(({ title }) => title).join(" ") + " tabs"}
    >
      {tabs.map(({ title }, index) => (
        <Tabs.Trigger
          key={"tab-" + index}
          value={"tab-" + index}
          className={cx(
            typography.H6,
            "bg-white px-5 py-3 flex-1 flex items-center justify-center select-none first:rounded-tl-md last:rounded-tr-md",
            "hover:text-curious-blue-500 data-[state=active]:text-curious-blue-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current",
            " outline-none cursor-default data-[state=active]:font-semibold"
          )}
        >
          {title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabs.map(({ description, image }, index) => (
      <Tabs.Content key={"tab-" + index} value={"tab-" + index}>
        <div className="w-full flex gap-5 bg-white">
          <div className="w-1/2 p-5">
            <p className={typography.body}>
              <ul className="list-disc pl-5">
                {description.map((listItem, index) => (
                  <li
                    className="py-0.5"
                    key={"use-case-item-" + index + "-description-item"}
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <div className="w-1/2 p-5">
            <AspectRatio.Root ratio={16 / 9}>
              <Image
                src={image.path}
                alt={image.alt}
                layout="fill"
                className="rounded-xl"
              />
            </AspectRatio.Root>
          </div>
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

export default TabsCustom;
