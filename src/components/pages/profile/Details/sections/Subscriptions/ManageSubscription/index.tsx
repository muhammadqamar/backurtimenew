"use client";
import SubscriptionPaymentCard from "@/components/cards/SubscriptionPaymentCard";
import SubscriptionSettingCard from "@/components/cards/SubscriptionSettingCard";
import { Danger } from "@/components/icons";
import React, { useState } from "react";
import ManageMembersTable from "./ManageMembersTable";
import { Groups, Toggle } from "@/components/common";
import PaymentsHistoryTable from "./PaymentsHistoryTable";
import CardCardSection from "./CardCardSection";
import CoSubscribersTable from "./CoSubscribersTable";

interface manageTypes {
  currentType: string;
  data: {
    name: string;
    logo: string;
    status: string;
  };
}

const SUBSCRIPTIONS_SECTION_GROUPS = [
  {
    id: "manage-subscription-group-1",
    title: "Payments history",
    name: "payments_history",
  },
  {
    id: "manage-subscription-group-2",
    title: "Co-subscribers",
    name: "co_subscribers",
  },
];

const ManageSubscription = ({ currentType, data }: manageTypes) => {
  const [currentGroup, setCurrentGroup] = useState("payments_history");
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="grid w-full grid-cols-1 gap-10">
      <p className="font-inter inline-flex items-center gap-1.5 text-base leading-[140%] font-semibold text-white">
        <Danger size={20} className="[&_path]:stroke-white!" /> Back to
        subscriptions
      </p>
      <div className="grid w-full grid-cols-1 gap-6">
        {currentType === "subscription_owner" ? (
          <SubscriptionSettingCard
            name={data?.name || "Netflix"}
            logoUrl={data?.logo || "/components/subcription-setting-icon.svg"}
            isOwner={true}
            checked={data.status === "private" || isPrivate}
            onToggleChange={(e) => {
              setIsPrivate(e);
            }}
          />
        ) : (
          <SubscriptionSettingCard
            name={data?.name || "Netflix"}
            logoUrl={data?.logo || "/components/subcription-setting-icon.svg"}
          />
        )}
        <div className="grid w-full grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          <SubscriptionPaymentCard
            isButton={true}
            buttonText="Add your debit date"
            name="Netflix Premium"
            price={`€ 22.27`}
            onClick={() => {
              alert("button is clicking");
            }}
          />
          <SubscriptionPaymentCard
            isButton={true}
            buttonText="Edit"
            name="Price per person"
            price={`€ 7.42`}
            onClick={() => {
              alert("button is clicking");
            }}
          />
          <SubscriptionPaymentCard
            isButton={false}
            name="Members"
            price={`3/4`}
          />
        </div>
      </div>
      <ManageMembersTable />

      <div className="grid w-full grid-cols-1 gap-6">
        <Groups
          groups={SUBSCRIPTIONS_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />

        {currentGroup === "payments_history" && <PaymentsHistoryTable />}

        {currentGroup === "co_subscribers" && <CoSubscribersTable />}
      </div>
      {currentType === "subscription_owner" ? (
        <CardCardSection
          heading="Remove my sharing"
          text="Pressing this button you remove your sharing and lost all co-subscribers
        forever."
          buttonText="Remove Netflix Premium"
        />
      ) : (
        <>
          <div className="bg-primitives-white_5 border-primitives-white_20 flex w-full flex-col gap-3 rounded-3xl border p-5">
            <Toggle
              label={
                <div className="flex flex-col gap-y-2">
                  <span className="font-inter text-base leading-[150%] font-medium text-white">
                    Service continuity
                  </span>
                  <span className="text-grey-light font-inter text-base leading-[150%] font-normal">
                    If your owner stops sharing, you will bw automatically
                    redirected to a new, identical offer.
                  </span>
                </div>
              }
            />
          </div>
          <CardCardSection
            text="If you delete this subscription now, your access will remain active until 12 May, 2025. After this date, it will not renew."
            buttonText="Cancel subscription"
          />
        </>
      )}
    </div>
  );
};

export default ManageSubscription;
