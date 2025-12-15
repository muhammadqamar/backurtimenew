"use client";
import Image from "next/image";
import { useState } from "react";
import PaperCard from "@/components/cards/paper_card";
import { Groups } from "@/components/common";
import { TabsDetails } from "@/components/pages/offers";

type ItemType = {
  progress: number;
  image: string;
  title: string;
  stats1: number;
  stats2: number;
  stats3: string;
};

const data = [
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
];

const USER_SECTION_GROUPS = [
  {
    id: "user-section-group-1",
    title: "Time",
    name: "time",
  },
  {
    id: "user-section-group-2",
    title: "Spores",
    name: "spores",
  },
];

export default function OffersPage() {
  const [currentGroup, setCurrentGroup] = useState("time");
  return (
    <div className="flex w-full flex-col gap-12 py-8">
      <div className="flex w-full flex-col gap-8">
        <div
          className="bg-blend-plus-lighter relative flex min-h-[268px] flex-col items-center justify-center gap-6 self-stretch rounded-[48px] px-5 pt-8 pb-[250px] bg-blend-normal xl:py-8"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
          }}
        >
          <h1 className="font-cinzel text-shadow-green relative z-2 text-center text-[50px] leading-[122%] font-bold text-white">
            Every action gives you
            <br />
            <span className="flex flex-wrap items-center justify-center">
              a bit of
              <span>
                <Image
                  src="/pages/offers/time-badge.svg"
                  alt="character"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain drop-shadow-white"
                />
              </span>
              Time
            </span>
          </h1>
          <p className="font-inter relative z-2 text-center text-base leading-[150%] font-normal text-white">
            It’s not the offer that matters. It’s what you do with it afterward
          </p>
          <Image
            src="/pages/offers/banner-character.png"
            alt="character"
            fill
            className="top-[inherit]! right-[inherit]! -bottom-[54px]! left-1/2! z-1 h-auto! w-[325px]! -translate-x-1/2 object-contain xl:-right-11! xl:left-[inherit]! xl:translate-x-[inherit]!"
          />
          <Image
            src="/pages/offers/green-shadow-bottom-right.png"
            alt="shadow"
            fill
            className="top-[inherit]! left-[inherit]! w-auto! rounded-br-[48px] xl:object-contain"
          />
          <Image
            src="/pages/offers/green-shadow-top-left.png"
            alt="shadow"
            fill
            className="right-[inherit]! bottom-[inherit]! w-auto! rounded-tl-[48px] xl:object-contain"
          />
        </div>
        <div className="mt-10 flex items-center justify-start gap-5 overflow-x-auto sm:justify-center xl:mt-0">
          <StoneButton label="My offers" />
          <StoneButton label="Simple offers" />
          <StoneButton label="Premium offers" />
          <StoneButton label="Ads" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
          <h1 className="text-shadow-dark-small font-cinzel text-[32px] leading-[122%] font-bold text-white">
            Hello, username!
          </h1>
          <div className="w-full sm:w-max">
            <Groups
              groups={USER_SECTION_GROUPS}
              onGroupChange={setCurrentGroup}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(163px,1fr))] md:gap-6 2xl:grid-cols-4">
          <PaperCard />
          <PaperCard />
          <PaperCard />
          <PaperCard />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <TabsDetails data={data as ItemType[]} />
      </div>
    </div>
  );
}

const StoneButton = ({ label = "label" }) => {
  return (
    <button className="relative h-full min-h-16 w-max shrink-0 px-6 py-4">
      <span className="font-inter relative z-1 text-base leading-[150%]! font-medium text-white">
        {label}
      </span>
      <Image
        src="/components/stone-btn-right.svg"
        alt="btn"
        width={16}
        height={64}
        className="absolute top-0 right-0 h-full min-h-16 w-4 object-cover object-right"
      />
      <Image
        src="/components/stone-btn-bg.svg"
        alt="btn"
        width={20}
        height={64}
        className="absolute top-0 left-0 h-full min-h-16 w-[calc(100%-16px)] object-cover object-left"
      />
    </button>
  );
};
