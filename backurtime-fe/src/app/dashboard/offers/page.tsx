"use client";
import PaperCard from "@/components/cards/paper_card";
import { Button, Tabs } from "@/components/common";
import { TabsDetails } from "@/components/pages/offers";
import Image from "next/image";

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
];

export default function OffersPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8">
      <div className="flex w-full flex-col gap-8">
        <div
          className="bg-blend-plus-lighter relative flex min-h-[268px] flex-col items-center justify-center gap-6 self-stretch rounded-[48px] px-5 py-8 bg-blend-normal"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
          }}
        >
          <h1 className="font-cinzel text-shadow-green text-center text-[50px] leading-[122%] font-bold text-white">
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
                  className="h-20 w-20 object-contain"
                />
              </span>
              Time
            </span>
          </h1>
          <p className="font-inter text-center text-base leading-[150%] font-normal text-white">
            It’s not the offer that matters. It’s what you do with it afterward
          </p>
          <Image
            src="/pages/offers/banner-character.png"
            alt="character"
            fill
            className="top-[inherit]! -right-11! -bottom-[54px]! left-[inherit]! z-1 h-auto! w-[325px]! object-contain"
          />
          <Image
            src="/pages/offers/green-shadow-bottom-right.png"
            alt="shadow"
            fill
            className="top-[inherit]! left-[inherit]! w-auto! rounded-br-[48px] object-contain"
          />
          <Image
            src="/pages/offers/green-shadow-top-left.png"
            alt="shadow"
            fill
            className="right-[inherit]! bottom-[inherit]! w-auto! rounded-tl-[48px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="relative w-max px-6 py-4">
            <span className="font-inter relative z-1 text-base leading-[150%]! font-medium text-white">
              Premium offers
            </span>
            <div className="absolute top-1/2 left-1/2 h-[80%] w-[calc(100%-25px)] -translate-x-1/2 -translate-y-1/2 bg-[url(/components/stone-button/stone-btn-center-cropped.svg)] bg-cover bg-no-repeat" />
            <div className="absolute top-0 left-1/2 z-1 h-4 w-[calc(100%-27px)] -translate-x-1/2 bg-[url(/components/stone-button/stone-btn-top.svg)] bg-cover bg-no-repeat" />
            <div className="absolute bottom-0 left-1/2 z-1 h-4 w-[calc(100%-27px)] -translate-x-1/2 bg-[url(/components/stone-button/stone-btn-bottom.svg)] bg-cover bg-no-repeat" />
            <div className="absolute top-0 left-0 z-1 h-full w-4 bg-[url(/components/stone-button/stone-btn-left.svg)] bg-contain bg-no-repeat" />
            <div className="absolute top-0 right-0 z-1 h-full w-4 bg-[url(/components/stone-button/stone-btn-right.svg)] bg-contain bg-no-repeat" />
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full items-center justify-between gap-6">
          <h1 className="text-shadow-dark-small font-cinzel text-[32px] leading-[122%] font-bold text-white">
            Hello, username!
          </h1>

          <div className="bg-primitives-white_20 flex min-h-12 items-center rounded-2xl p-[3px]">
            <Button
              title="Time"
              className="font-inter flex min-h-10.5 items-center justify-center rounded-2xl bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)] bg-no-repeat! px-4 py-[9px] text-base leading-[150%]! font-medium text-white"
              onClick={() => alert("In development")}
            />
            <Button
              title="Spores"
              className="font-inter flex min-h-10.5 items-center justify-center rounded-2xl bg-transparent bg-no-repeat! px-4 py-[9px] text-base leading-[150%]! font-medium text-white"
              onClick={() => alert("In development")}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-4 gap-6">
          <PaperCard />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <TabsDetails data={data} />
      </div>
    </div>
  );
}
