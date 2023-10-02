"use client";

import * as HoverCard from "@radix-ui/react-hover-card";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const CustomHoverCard = ({ trigger, children }: Props) => (
  <HoverCard.Root openDelay={0}>
    <HoverCard.Trigger asChild>{trigger}</HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[350px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        {children}
        {/* <HoverCard.Arrow className="fill-white" /> */}
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default CustomHoverCard;
