"use client";

import { Tabs } from "@/components/common";
import { ReactNode, useMemo, useState } from "react";
import OfferCard from "@/components/cards/offer_card";
import Image from "next/image";

export default function TabsDetails({ data }) {
  const [currentTab, setCurrentTab] = useState("inprogress");

  const inProgress = data?.filter((i) => i.progress < 100);
  const completed = data?.filter((i) => i.progress >= 100);

  const section = useMemo(() => {
    const sections: Record<string, ReactNode> = {
      inprogress: (
        <div className="grid w-full grid-cols-4 gap-6">
          {inProgress.map((d, i) => (
            <OfferCard key={i} {...d} />
          ))}
        </div>
      ),
      completed: (
        <div className="grid w-full grid-cols-4 gap-6">
          {completed.map((d, i) => (
            <OfferCard key={i} {...d} />
          ))}
        </div>
      ),
    };

    return sections[currentTab];
  }, [currentTab]);

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full items-center gap-6">
        <Tabs
          tabs={[
            {
              id: "offer-details-tab-1",
              title: `In progress (${inProgress?.length})`,
              name: "inprogress",
            },
            {
              id: "offer-details-tab-2",
              title: `Completed (${completed?.length})`,
              name: "completed",
            },
          ]}
          onTabChange={setCurrentTab}
        />
        <div className="flex items-center gap-3.5">
          <div className="bg-primitives-white_20 flex h-12 min-w-[210px] items-center gap-6 rounded-full px-4 py-3.5">
            <span className="font-inter text-[14px] leading-[140%] font-medium tracking-[.14px] text-white">
              Sort by: The newest
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt="arrow down"
              width={16}
              height={16}
              className="shrink-0"
            />
          </div>
          <div className="bg-primitives-white_20 flex h-12 min-w-[111px] items-center gap-6 rounded-full px-4 py-3.5">
            <Image
              src="/icons/filter-green.svg"
              alt="filter"
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="font-inter text-[14px] leading-[140%] font-medium tracking-[.14px] text-white">
              Filters
            </span>
          </div>
        </div>
      </div>
      {section}
    </div>
  );
}
