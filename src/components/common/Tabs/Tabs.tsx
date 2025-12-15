"use client";

import type { Tab } from "./types";
import TabItem from "./components/TabItem";
import { useState } from "react";
import { cn } from "@/utils";

interface TabsProps {
  tabs: Tab[];
  wrapperClassName?: string;
  onTabChange?: (value: string) => void;
}

export default function Tabs({
  tabs,
  wrapperClassName = "",
  onTabChange,
}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }

    setCurrentTab(tab);
  };

  return (
    <div
      className={cn(
        "border-b-grey-light flex w-full items-center overflow-x-auto border-b",
        wrapperClassName,
      )}
    >
      {tabs.map((t) => (
        <TabItem
          key={t.id}
          tab={t}
          onTabChange={handleTabChange}
          currentTab={currentTab}
        />
      ))}
    </div>
  );
}
