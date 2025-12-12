import { Groups } from "@/components/common";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import Image from "next/image";

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
      <div className="flex flex-col gap-y-[10px]">
        <span className="font-inter text-lg font-medium text-white">
          Manage subscriptions
        </span>
        <span className="text-grey-light font-inter text-base font-normal">
          Manage active subscriptions, members, check payment history.
        </span>
      </div>
      <div className="flex w-full flex-col gap-y-6">
        <Groups
          groups={SUBSCRIPTIONS_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />
      </div>
      <div className="grid w-full grid-cols-1 items-center gap-x-5 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <SubscriptionOwnerCard key={i} />
        ))}
      </div>
      {/* <EmptyState /> */}
    </div>
  );
}

const SubscriptionOwnerCard = () => {
  return (
    <div className="bg-white-10 relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-[42px] p-1">
      <div
        className={`absolute bottom-[84px] left-1/2 h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] ${true ? "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]" : "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]"} opacity-[0.3] blur-[68px]`}
      />

      <div className="border-primitives-white_30 shadow-dark-sm bg-dark-100 relative z-2 min-h-[199px] w-full overflow-hidden rounded-[38px] border p-[18px]">
        <div className="relative z-3 flex w-full items-center justify-end">
          <div className="h-auto w-max rounded-3xl bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)] p-px">
            <div className="bg-gray flex h-6 w-full items-center justify-center rounded-3xl border border-solid border-transparent px-[11px] py-[3px]">
              <span className="font-inter text-[12px] font-normal tracking-[1%] text-white">
                Private
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-full min-h-[120] w-full flex-col items-center justify-center">
          <div className="relative z-2 h-16 w-16">
            <Image
              src="/icons/youtub-white.svg"
              fill
              alt="layer"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-full ${true ? "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(54,255,255,0.40)_94.75%)]" : "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(29,149,97,0.40)_94.75%)]"} `}
        />
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-2 flex min-h-10 w-full flex-col gap-4 px-4 pb-4">
        <p className="font-inter text-[18px] leading-[140%] font-semibold tracking-[1%] text-white">
          YouTube Premium
        </p>
        <div className="flex w-full items-center justify-between gap-2.5">
          <div className="flex items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative -ml-5 h-11 w-11 rounded-full bg-white first:ml-0`}
              >
                <Image
                  src="/components/mock_user_avatar.png"
                  alt="btn"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="font-inter text-grey-light text-base leading-[150%]! font-medium">
            1/3 members
          </p>
        </div>
        <button className="relative flex min-h-12 w-full items-center justify-center p-[13px]">
          <span className="font-cinzel text-lg leading-[122%]! font-bold text-white">
            Access The Subscription
          </span>
          <Image
            src="/components/frame-left-btn.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 right-0 h-full w-5 object-cover object-right"
          />
          <Image
            src="/components/frame-btn.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 left-0 h-full min-h-12 w-[calc(100%-20px)] object-cover object-left"
          />
        </button>
      </div>
    </div>
  );
};
