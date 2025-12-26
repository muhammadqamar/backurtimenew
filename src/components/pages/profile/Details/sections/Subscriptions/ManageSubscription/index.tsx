"use client";
import SubscriptionPaymentCard from "@/components/cards/SubscriptionPaymentCard";
import SubscriptionSettingCard from "@/components/cards/SubscriptionSettingCard";
import { ArrowLeft, Danger } from "@/components/icons";
import React, { useState } from "react";
import ManageMembersTable from "./ManageMembersTable";
import { Button, Groups, Toggle } from "@/components/common";
import PaymentsHistoryTable from "./PaymentsHistoryTable";
import CardCardSection from "./CardCardSection";
import CoSubscribersTable from "./CoSubscribersTable";
type subscriptionType = {
  name: string;
  logo: string;
  status: string;
};

// Define the props interface
interface manageTypes {
  currentType: string;
  setSubscription: React.Dispatch<React.SetStateAction<subscriptionType>>;
  data: subscriptionType;
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

const ManageSubscription = ({
  currentType,
  data,
  setSubscription,
}: manageTypes) => {
  const [currentGroup, setCurrentGroup] = useState("payments_history");
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:gap-10">
      <Button
        title="Back to subscriptions"
        icon={<ArrowLeft size={20} className="[&_path]:stroke-white!" />}
        onClick={() => {
          setSubscription({
            name: "",
            logo: "",
            status: "",
          });
        }}
        className="font-inter inline-flex min-h-auto! w-max items-center justify-start gap-1.5! p-0! text-base! leading-[140%]! font-semibold! text-white"
      />

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
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[22px] lg:grid-cols-3">
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
      {/* table members */}
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
          <div className="bg-primitives-white_5 border-primitives-white_20 flex w-full flex-col gap-3 rounded-3xl border p-4 sm:p-5">
            <Toggle
              label={
                <div className="flex flex-col gap-y-2">
                  <span className="font-inter text-sm leading-[150%] font-medium text-white sm:text-base">
                    Service continuity
                  </span>
                  <span className="text-grey-light font-inter text-sm leading-[150%] font-normal sm:text-base">
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
