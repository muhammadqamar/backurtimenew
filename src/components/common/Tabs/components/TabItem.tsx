import { cn } from "@/utils";
import type { Tab } from "../types";

interface TabItemProps {
  tab: Tab;
  currentTab: string;
  onTabChange: (value: string) => void;
}

export default function TabItem({
  tab,
  currentTab,
  onTabChange,
}: TabItemProps) {
  const { title, name } = tab;

  const isActiveTab = currentTab === name;

  return (
    <button
      className="flex cursor-pointer flex-col justify-start gap-y-[14px]"
      onClick={() => onTabChange(name)}
    >
      <span
        className={cn(
          "text-grey-light font-inter px-3 text-base font-medium",
          isActiveTab && "text-white",
        )}
      >
        {title}
      </span>
      <div
        className={cn(
          "h-[3px] rounded-full bg-transparent",
          isActiveTab && "bg-green-normal",
        )}
      />
    </button>
  );
}
