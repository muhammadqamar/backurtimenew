"use client";

import {
  Button,
  FilterChips,
  PriceCounter,
  ShareSubscriptItem,
  StarBadge,
  Status,
} from "@/components/common";
import Radio from "@/components/common/Radio";
import {
  CardTag,
  ClanStatus,
  ClockTag,
  TotalSavedLabel,
} from "@/components/common/Tags";
import SvgClock from "@/components/icons/Clock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import * as Icons from "../../components/icons";
import { FaqItem } from "@/components/common";
import MissionCard from "@/components/cards/mission_card";
import OnboardingCard from "@/components/cards/onboarding_card";
import BonusCard from "@/components/cards/bonus_card";
import RankCard from "@/components/cards/RankCard";
import WoodenCard from "@/components/cards/WoodenCard";
import LiveDonateCard from "@/components/cards/LiveDonateCard";
import PrizeCard from "@/components/cards/PrizeCard";
import SubscriptionSettingCard from "@/components/cards/SubscriptionSettingCard";
import SubscriptionPaymentCard from "@/components/cards/SubscriptionPaymentCard";
import PaymentMethodCard from "@/components/cards/PaymentMethodCard";
import { DataTable, TableData } from "@/components/common/Tables";
import CurrentPerkCard from "@/components/cards/CurrentPerkCard";
import CardCart from "@/components/cards/CardCart";
import HorizontalCard from "@/components/cards/HorizontalCard";
import SubscriptionCard from "@/components/cards/SubscriptionCard";

export default function Page() {
  const iconComponents = [
    "Adds",
    "Clan",
    "Clock",
    "Community",
    "Drawings",
    "Game",
    "Help",
    "Missions",
    "Offers",
    "Question",
    "Refresh",
    "Rewards",
    "Store",
    "Time",
    "More",
    "Top",
    "Team",
    "Spore",
    "Apple",
    "ArrowLeftOne",
    "Calender",
    "Camera",
    "Message",
    "ChevronDown",
    "Android",
    "CircleUser",
    "Desktop",
    "Eye",
    "Video",
    "Done",
    "Flag",
    "Search",
    "Info",
    "Notification",
    "Close",
    "Danger",
    "Plus",
    "Minus",
    "Send",
    "Heart",
    "Comment",
    "Edit",
    "Lock",
    "Smile",
    "ArrowRight",
    "Cart",
    "Maximize",
    "Minimize",
    "ArrowLeft",
    "ArrowTopRight",
    "Menu",
    "Trash",
    "DangerTwo",
    "Verified",
    "FaqCircle",
    "Key",
    "Link",
    "VerifiedStar",
    "Diamond",
    "Clear",
    "Crown",
    "Filters",
    "Flame",
    "LoadMore",
    "LogOut",
    "Pazzle",
    "PresentBox",
    "Reply",
    "Shield",
    "Telegram",
    "Rewards",
    "UnArchive",
  ];

  const paymentHistoryTable: TableData = {
    id: "payment-history",
    type: "payment-history",
    title: "Payment History",
    columns: [
      { header: "Name", accessorKey: "name" },
      { header: "Email", accessorKey: "email" },
      { header: "Method", accessorKey: "method" },
      { header: "Amount", accessorKey: "amount" },
      { header: "Date", accessorKey: "date" },
      { header: "Actions", accessorKey: "actions" },
    ],
    rows: [
      {
        id: "payment-1",
        type: "payment-history",
        onClick: () => alert("Clicked entire row!"),
        cells: {
          name: {
            value: "John Doe",
            icon: "",
            onClick: () => alert("Clicked name cell"),
            iconOnClick: () => alert("Clicked user icon"),
          },
          email: {
            value: "john@example.com",
            icon: "",
            href: "mailto:john@example.com",
            onClick: () => alert("This won't fire because href exists"),
          },
          method: {
            value: "Credit Card",
            icon: "",
            onClick: () => alert("Clicked payment method"),
          },
          amount: {
            value: "€ 7.42",
            icon: "",
            onClick: () => alert("Clicked amount"),
          },
          date: {
            value: "12 April, 2025",
            icon: "",
            onClick: () => alert("Clicked date"),
          },
          actions: {
            value: "", // This can be empty or used as fallback
            render: () => (
              // Move render here as a property
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("View details");
                  }}
                  className="rounded p-2 text-blue-600 hover:bg-blue-100"
                  title="View"
                >
                  View
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Edit");
                  }}
                  className="rounded p-2 text-green-600 hover:bg-green-100"
                  title="Edit"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Delete");
                  }}
                  className="rounded p-2 text-red-600 hover:bg-red-100"
                  title="Delete"
                >
                  Delete
                </button>
              </div>
            ),
          },
        },
      },
    ],
  };

  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      {/* Button */}
      <div className="">
        <span className="font-semibold">Button</span>
        <div className="grid grid-cols-1 gap-3">
          <Button
            className="group h-12 w-12"
            icon={<Icons.ArrowRight size={20} />}
            withBackgoundImage={true}
            backgroundImageUrl="/components/stone-rounded-btn.svg"
          />
          <Button className="w-max" title="secondary" variant="primary" />
          <Button
            className="w-full"
            title="Access The Subscription "
            variant="secondary"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>Radio</span>
        <div className="grid grid-cols-1 gap-3">
          <Radio label="Default" />
          <Radio label="Active" checked readOnly />
          <Radio label="Active & Done" checked readOnly done />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Tags</span>
        <div className="grid grid-cols-1 gap-3.5">
          <ClockTag icon="/icons/clock-3d.svg" time="10" />
          <ClanStatus icon="/icons/clan-green.svg" status="Lvl. 2" />
          <TotalSavedLabel label="Total saved:" amount={"€ 3 456"} />
          <CardTag icon={<SvgClock size={16} />} text="20s" />
          <CardTag icon={<SvgClock size={16} />} />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Tags</span>
        <div className="grid grid-cols-1 gap-3.5">
          <FilterChips text="Filter" icon />
          <FilterChips text="Filter" dropdown />
          <FilterChips text="Filter" dropdown icon />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Status</span>
        <div className="grid grid-cols-1 gap-3.5">
          <Status text="Completed" status={"completed"} />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="gold"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="green"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="blue"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="silver"
          />
        </div>
        <div className="grid grid-cols-1 gap-3.5">
          <Status small text="Completed" status={"completed"} />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="gold"
          />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="green"
          />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="blue"
          />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="silver"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>ToolTips</span>
        <div className="flex items-center gap-3.5">
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="top" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="right" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent
              direction="bottom"
              className="text-dark-50 bg-white"
            >
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="left" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-semibold">Icons</span>
        <div className="flex flex-wrap items-center gap-3">
          {iconComponents.map((iconName, index) => {
            const Icon = Icons[iconName as keyof typeof Icons];
            return (
              <div
                key={`${iconName}-${index}`}
                className="flex flex-col items-center gap-1 text-xs"
              >
                <Icon />
                <span>{iconName}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">FaqItem</span>
        <div>
          <FaqItem
            content={[
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
            ]}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Misson Card</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={1}
            isCompleted={false}
          />
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={0.5}
            isCompleted={false}
          />
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={1}
            isCompleted={true}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Onboarding Card</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <OnboardingCard
            image="/components/onbording-card-image.png"
            title="Psychodelic"
            description="Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor."
            selected={false}
          />
          <OnboardingCard
            image="/components/onbording-card-image.png"
            title="Psychodelic"
            description="Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor."
            selected={true}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Bonus Card</span>
        <div className="w-full">
          <BonusCard title="Text" icon="/icons/bonus-card.svg" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Rank Card</span>
        <div className="w-full">
          <RankCard
            clanname="Clanname"
            username="Username"
            level={10}
            rank="silver"
            points={150}
            className="w-[273px]"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Wooden Card</span>
        <div className="flex w-full flex-col gap-3.5">
          <WoodenCard label="Total members" TotalMembers={20} />
          <StarBadge
            color="gold"
            mediaUrl="/icons/badge/user-placeholder.svg"
          />
          <span>mobile</span>
          <WoodenCard label="Total members" TotalMembers={20} small />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Live Donate Card</span>
        <div className="flex w-full gap-8">
          <LiveDonateCard
            donate={500}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
          <LiveDonateCard
            donate={10000}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
          <LiveDonateCard
            donate={50000}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
        </div>
        <span className="font-bold">Prize Card</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PrizeCard
            imageUrl="/components/prize-card.png"
            campaignName="Cyber monday"
            productName="iPhone 16 Pro"
            rarity="Ultra Rare"
          />
          <PrizeCard
            imageUrl="/components/prize-card.png"
            campaignName="Cyber monday"
            productName="iPhone 16 Pro"
            rarity="Rare"
          />
          <PrizeCard
            imageUrl="/components/prize-card.png"
            campaignName="Cyber monday"
            productName="iPhone 16 Pro"
            rarity="Common"
          />
        </div>
        <span className="font-bold">Subscription Setting Card</span>
        <div className="grid w-full grid-cols-1 gap-4">
          <SubscriptionSettingCard
            name="Netflix"
            logoUrl="/components/subcription-setting-icon.svg"
            isOwner={true}
          />
          <SubscriptionSettingCard
            name="Netflix"
            logoUrl="/components/subcription-setting-icon.svg"
            isOwner={false}
          />
        </div>
        <span className="font-bold">Subscription Payment Card</span>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <SubscriptionPaymentCard
            isButton={false}
            name="Netflix Premium"
            price={22.27}
          />
          <SubscriptionPaymentCard
            isButton={true}
            name="Netflix Premium"
            price={22.27}
            onClick={() => {
              alert("button is clicking");
            }}
          />
        </div>
        <span className="font-bold">Payment method Card</span>
        <div className="grid w-full grid-cols-1 gap-3">
          <PaymentMethodCard
            bankName="Axim Bank"
            cardLast4="4578"
            expiry="08/25"
            isPrimary
            iconSrc={"/components/bank-card-icon.svg"}
          />

          <PaymentMethodCard
            bankName="Axim Bank"
            cardLast4="4578"
            expiry="08/25"
            iconSrc={"/components/bank-card-icon.svg"}
          />
        </div>
        <span className="font-bold">Current Perk Card</span>
        <div className="grid w-full grid-cols-1 gap-3">
          <CurrentPerkCard
            title="Burt"
            price="€ 49"
            period="/year"
            expiresAt="Expires 12 April, 2026"
          />
        </div>
        <span className="font-bold">Price Counter</span>
        <div className="">
          <PriceCounter
            initialValue={1}
            min={1}
            max={100}
            step={1}
            onChange={() => {}}
            value={1}
          />
        </div>
        <span className="font-bold">Card cart</span>
        <div className="grid grid-cols-1">
          <CardCart
            title="Spuffy Family Name"
            image="/components/card-cart-image.png"
            value={125}
            initialQuantity={2}
            onDelete={() => alert("Deleted")}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Table</span>
        <div className="w-full">
          <DataTable table={paymentHistoryTable} />
        </div>
      </div>
      <span className="font-bold">Horizontal card</span>
      <div className="grid grid-cols-1">
        <HorizontalCard
          title="YouTube Premium:"
          description="Enjoy your favorite videos for free, but be prepared for lots of ad interruptions. This version is ideal for occasional use, but ads can quickly become annoying if you consume a lot of content."
          iconSrc="/components/youtube-red.svg"
        />
      </div>
      <span className="font-bold">Share Subscript Item </span>
      <div className="grid grid-cols-1">
        <ShareSubscriptItem iconSrc="/icons/spotify.svg" />
      </div>
      <span className="font-bold">Subscription Card</span>
      <div className="grid grid-cols-3 gap-4">
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="green"
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="gold"
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="blue"
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="silver"
        />
      </div>
    </div>
  );
}
