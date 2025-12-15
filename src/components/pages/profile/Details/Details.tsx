"use client";

import { Tabs } from "@/components/common";
import { ReactNode, useMemo, useState } from "react";
import { HistorySection, PerksSection, SubscriptionsSection } from "./sections";

const PROFILE_DETAILS_TABS = [
  {
    id: "profile-details-tab-1",
    title: "Subscriptions",
    name: "subscriptions",
  },
  { id: "profile-details-tab-2", title: "Perks", name: "perks" },
  { id: "profile-details-tab-3", title: "History", name: "history" },
];

export default function ProfileDetails() {
  const [currentTab, setCurrentTab] = useState("subscriptions");

  const section = useMemo(() => {
    const sections: Record<string, ReactNode> = {
      subscriptions: <SubscriptionsSection />,
      perks: <PerksSection />,
      history: <HistorySection />,
    };

    return sections[currentTab];
  }, [currentTab]);

  return (
    <div className="flex w-full flex-col gap-y-10 rounded-4xl border border-white/20 bg-linear-to-b from-white/15 to-white/5 p-4 md:p-[34px] lg:rounded-[48px]">
      <Tabs tabs={PROFILE_DETAILS_TABS} onTabChange={setCurrentTab} />
      {section}
    </div>
  );
}
