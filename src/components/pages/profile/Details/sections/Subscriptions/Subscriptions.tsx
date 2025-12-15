import { Groups } from "@/components/common";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import Image from "next/image";
import SubscriptionOwnerCard from "@/components/cards/subscriber_card";
import { cn } from "@/utils";

interface subscriptionProps {
  status: string;
  logo: string;
  name: string;
  member: number;
}

const SUBSCRIPTION_DATA = [
  {
    status: "private",
    logo: "/icons/youtub-white.svg",
    name: "YouTube Premium",
    member: 3,
  },
  {
    status: "Public",
    logo: "/icons/netflix.svg",
    name: "Netflix  Premium",
    member: 3,
  },
  {
    status: "private",
    logo: "/icons/spotify.svg",
    name: "Spotify Premium",
    member: 3,
  },
];

const SUBSCRIPTIONS_SECTION_GROUPS = [
  {
    id: "subscriptions-section-group-1",
    title: "Subscription owner",
    name: "subscription_owner",
  },
  {
    id: "subscriptions-section-group-2",
    title: "Subscriber",
    name: "subscriber",
  },
];

export default function SubscriptionsSection() {
  const [currentGroup, setCurrentGroup] = useState("subscription_owner");

  return (
    <div className="flex w-full flex-col gap-y-8">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-y-2.5">
          <span className="font-inter text-lg font-medium text-white">
            Manage subscriptions
          </span>
          <span className="text-grey-light font-inter text-base font-normal">
            Manage active subscriptions, members, check payment history.
          </span>
        </div>
        <div
          className={cn(
            "shadow-button h-auto w-max shrink-0 rounded-[20px] p-px",
            "bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
          )}
        >
          <div className="bg-dark-50 flex h-auto w-full items-center justify-center gap-1.5 rounded-[20px] border border-solid border-transparent px-[18px] py-3">
            <Image
              src="/icons/bag-gold.svg"
              alt="bag gold"
              width={32}
              height={32}
              className="drop-shadow-icon-sm"
            />
            <span className="font-inter text-grey-light text-base leading-[140%]! font-normal">
              Total saved:
            </span>
            <span className="font-inter text-green-normal ml-1 text-lg leading-[140%]! font-semibold tracking-[1%]">
              € 3 456
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-6">
        <Groups
          groups={SUBSCRIPTIONS_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />
      </div>
      {currentGroup === "subscriber" && (
        <div className="grid w-full grid-cols-1 items-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SUBSCRIPTION_DATA.map((card: subscriptionProps, i: number) => (
            <SubscriptionOwnerCard key={i} {...card} />
          ))}
        </div>
      )}
      {currentGroup === "subscription_owner" && <EmptyState />}
    </div>
  );
}
