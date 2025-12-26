"use client";

import AchievementsCard from "@/components/cards/achievements_card";
import StoneCard from "@/components/cards/StoneCard";
import { NeonText, Toggle } from "@/components/common";
import { User } from "@/types/user";
import { customFetch } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import QRCode from "react-qr-code";

const ACHIEVEMENTS_CARD = [
  { icon: "/components/sage.svg", title: "Sage" },
  { icon: "/components/wildfire.svg", title: "Wildfire" },
  { icon: "/components/legendary.svg", title: "Legendary" },
];

const PROFILE_STATISTIC = [
  {
    id: "profile-statistic-1",
    value: 0,
    title: "Missions completed",
    image: "/pages/profile/missions_completed.png",
  },
  {
    id: "profile-statistic-2",
    value: 0,
    title: "Offers completed",
    image: "/pages/profile/offers_completed.png",
  },
  {
    id: "profile-statistic-3",
    value: 0,
    title: "Draws entered",
    image: "/pages/profile/draws_entered.png",
  },
  {
    id: "profile-statistic-4",
    value: 0,
    title: "Total time earned",
    image: "/pages/profile/total_time_earned.png",
  },
  {
    id: "profile-statistic-5",
    value: 0,
    title: "Total wins",
    image: "/pages/profile/total_wins.png",
  },
  {
    id: "profile-statistic-6",
    value: "€ 0",
    title: "Total donation",
    image: "/pages/profile/total_donation.png",
  },
];

export default function ProfileInformation() {
  const { data, isLoading } = useQuery({
    queryKey: ["profileButton"],
    queryFn: () => {
      return customFetch<User>("/users/me");
    },
  });

  return (
    <div className="2lg:p-15 2lg:gap-x-16 grid grid-cols-1 gap-x-8 gap-y-8 rounded-4xl border border-white/20 p-4 backdrop-blur-md md:gap-x-9 md:p-9 lg:grid-cols-2 lg:rounded-[48px]">
      <div className="bg-deep-teal shadow-dark relative flex w-full flex-col overflow-hidden rounded-[20px]">
        <Image
          src="/pages/profile/stardust.webp"
          alt="dd"
          fill
          className="-z-2 opacity-40 mix-blend-plus-lighter"
        />

        <Image
          src="/pages/profile/qr-card-bg.png"
          alt="dd"
          fill
          className="-z-1 object-cover opacity-40 mix-blend-plus-lighter"
        />

        <div className="z-px relative flex h-full w-full flex-col justify-between gap-6 rounded-[20px] p-4 sm:gap-12 sm:p-6">
          <div className="relative flex h-full w-full flex-row items-end justify-between gap-0.5 sm:flex-col sm:justify-end sm:gap-12">
            <div className="relative flex h-auto w-max flex-col gap-y-2 rounded-[20px] bg-white/20 px-3 py-2.5 backdrop-blur-[20px] sm:absolute sm:top-0 sm:left-0">
              <QRCode
                value="hey"
                fgColor="rgba(155, 155, 155, 0)"
                className="size-[108px] sm:size-[150px]"
              />
              <span className="font-inter flex items-center justify-center gap-2 text-center text-sm leading-[140%] font-medium tracking-[1%] text-white">
                ID: 84798678
                <Image
                  src="/icons/copy.svg"
                  alt="copy"
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
              </span>
            </div>
            <Image
              src="/pages/profile/mock-anime.png"
              alt="mock user avatar full"
              width={635}
              height={564}
              className="mt-[194px] w-full! object-contain object-left max-sm:hidden sm:mt-0 sm:object-[inherit]"
            />
            <Image
              src="/pages/profile/mock-mobile.png"
              alt="mock user avatar full"
              width={155}
              height={148}
              className="object-contain sm:hidden"
            />
            {/* <div className="relative mt-18 flex h-full w-full flex-col items-center justify-center bg-[url(/pages/profile/avatar_podium.webp)]">
              <Image
                src="/pages/profile/mock_user_avatar_full.png"
                alt="mock user avatar full"
                width={241}
                height={358}
                className="left-50% absolute top-0"
              />
            </div> */}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-4 rounded-[20px] bg-[#08151D80] p-4 backdrop-blur-lg sm:gap-y-[26px] sm:px-0 sm:py-6">
            <div className="flex items-center gap-x-2 sm:gap-x-[26px]">
              <div className="relative h-auto w-full">
                <Image
                  src="/pages/profile/left_divider.png"
                  alt="left divider"
                  width={170}
                  height={24}
                />
              </div>
              <span className="font-cinzel text-xl font-bold whitespace-nowrap text-white text-shadow-[1px_6px_10.2px_rgba(212,139,32,0.6),0px_2px_4px_rgba(210,171,104,1)]">
                LV 0
              </span>
              <div className="relative h-auto w-full">
                <Image
                  src="/pages/profile/right_divider.png"
                  alt="right divider"
                  width={170}
                  height={24}
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/clan-gold.svg"
                  alt="clan "
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="font-inter text-grey-light text-sm leading-[140%] font-normal sm:text-base sm:leading-[150%]!">
                  Clan:
                  <span className="ml-1 leading-[140%]! font-semibold!">
                    Ammanis
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/my-rank.svg"
                  alt="clan "
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="font-inter text-grey-light text-sm leading-[140%] font-normal sm:text-base sm:leading-[150%]!">
                  My rank:
                  <span className="ml-1 leading-[140%]! font-semibold!">
                    Strategist
                  </span>
                </p>
              </div>
            </div>
            <Image
              src="/components/stone_progress_bar.png"
              alt="stone progress bar"
              width={400}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-6 sm:gap-y-8">
        <div className="flex w-full flex-wrap justify-between gap-4 border-b border-b-white/20 pb-6 sm:pb-8">
          <div className="flex flex-col items-start gap-y-2 sm:gap-y-2.5">
            {isLoading ? (
              <span>Loading</span>
            ) : (
              <div className="flex items-center gap-3">
                <NeonText
                  text={data?.email || "Username"}
                  className="text-2xl leading-[122%] font-bold sm:text-[32px]"
                />
                <Image
                  src="/pages/profile/clan-lable.svg"
                  alt="profile settings button"
                  width={52}
                  height={39}
                  className="max-sm:size-12!"
                />
              </div>
            )}
            <span className="font-inter text-grey-light text-base leading-[150%] font-normal">
              Member for {differenceInDays(new Date(), new Date())} days
            </span>
          </div>
          <Image
            src="/pages/profile/profile_settings_button.svg"
            alt="profile settings button"
            width={48}
            height={48}
            className="ml-auto cursor-pointer"
            onClick={() => alert("In development")}
          />
        </div>

        <div className="flex w-full flex-col gap-y-4 sm:gap-y-6">
          <span className="font-cinzel text-base leading-[120%] font-bold text-white uppercase sm:text-xl">
            My statistic
          </span>
          <div className="no-scrollbar flex w-full items-center gap-3 overflow-x-auto overflow-y-clip sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 md:gap-x-8">
            {PROFILE_STATISTIC.map((ps, index) => (
              <StoneCard
                key={index}
                image={ps.image}
                value={ps.value}
                title={ps.title}
                className="min-w-[260px]"
              />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4 border-b border-b-white/20 pb-6 sm:gap-y-6 sm:pb-8">
          <div className="flex w-full items-center justify-between">
            <span className="font-cinzel text-base font-bold text-white sm:text-xl">
              Achievements
            </span>
            <button
              className="font-inter flex cursor-pointer items-center justify-center text-base font-semibold text-white"
              onClick={() => alert("In development")}
            >
              View all
            </button>
          </div>

          <div className="no-scrollbar flex w-full items-center gap-4 overflow-x-auto overflow-y-clip sm:gap-5">
            {ACHIEVEMENTS_CARD.map((card, i) => (
              <AchievementsCard
                key={i}
                {...card}
                className="w-[213px] shrink-0"
              />
            ))}
          </div>
        </div>

        <Toggle
          label={
            <div className="flex flex-col gap-y-1.5">
              <span className="font-inter text-sm font-medium text-white sm:text-base">
                Adds
              </span>
              <span className="text-grey-light font-inter text-sm font-normal sm:text-base">
                Enable pop-ups on your screen and observe short ad clips to earn
                more Time daily.
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
