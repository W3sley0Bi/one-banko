import { cn } from "utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid/BentoGrid";
import {
  IconBrandX,
  IconFileBroken,
  IconBrandCashapp,
  IconGraph,
  IconDownload,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "One Banko... to rule them all",
    description:
      "Upload your bank statements and get a panormaic all over your accounts",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Detailed report",
    description:
      "Download fancy reports of your transactions...way more than a classic bank statement",
    header: <Skeleton />,
    icon: <IconDownload className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Saving",
    description:
      "Find in which category you are spening to much and start saving",
    header: <Skeleton />,
    icon: <IconBrandCashapp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Power over charts is power over all",
    description: "Generate beautiful chart with the power of a click",
    header: <Skeleton />,
    icon: <IconGraph className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Be the chosen one! ",
    description: "Share your progress in saving with the community",
    header: <Skeleton />,
    icon: <IconBrandX className="h-4 w-4 text-neutral-500" />,
  },
];
