import { cn } from "@/utils";
import { useMemo } from "react";
import {
  COMPLETED_MISSIONS_DATA,
  COMPLETED_OFFERS_DATA,
  PRIZES_WON_DATA,
} from "../constants";
import { format } from "date-fns";
import { Adds, Clock, Game, Question, Time } from "@/components/icons";

interface HistoryTableProps {
  currentGroup: string;
}

export default function HistoryTable({ currentGroup }: HistoryTableProps) {
  const group = useMemo(() => {
    const groups: Record<string, { name: string; data: any[] }> = {
      completed_offers: {
        name: "completed_offers",
        data: COMPLETED_OFFERS_DATA,
      },
      completed_missions: {
        name: "completed_missions",
        data: COMPLETED_MISSIONS_DATA,
      },
      completed_draws: {
        name: "completed_draws",
        data: [],
      },
      prizes_won: {
        name: "prizes_won",
        data: PRIZES_WON_DATA,
      },
      store_purchases: {
        name: "store_purchases",
        data: [],
      },
    };

    return groups[currentGroup];
  }, [currentGroup]);

  const isPrizesWonGroup = group.name === "prizes_won";
  const isCompletedOffersGroup = group.name === "completed_offers";
  const isCompletedMissionsGroup = group.name === "completed_missions";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-y-4 overflow-x-auto",

        isPrizesWonGroup &&
          "grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {group.data.map((d, index) => {
        if (isPrizesWonGroup) {
          const isCommonPrize = d.rarity === "common";
          const isRarePrize = d.rarity === "rare";
          const isUltraRarePrize = d.rarity === "ultra_rare";

          return (
            <div
              key={d.id}
              className="flex w-full flex-col gap-y-5 rounded-[42px] bg-white/10 p-2"
            >
              <div className="flex h-[223px] w-full justify-end rounded-[38px] bg-white/20 p-4">
                <div
                  className={cn(
                    "flex h-[25px] items-center justify-center rounded-full border bg-white/20 px-3 py-1",
                    isCommonPrize && "border-green-normal",
                    isRarePrize && "border-grey-light",
                    isUltraRarePrize && "border-[#FDB836]",
                  )}
                >
                  <span className="font-inter text-xs font-normal text-white capitalize">
                    {d.rarity}
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 pb-3">
                <span className="font-inter text-grey-light text-base font-normal">
                  {d.title}
                </span>
                <span className="font-inter text-lg font-semibold text-white">
                  {d.reward}
                </span>
              </div>
            </div>
          );
        }

        return (
          <div
            key={d.id}
            className="grid w-full min-w-[500px] grid-cols-4 rounded-2xl bg-white/10 px-4 py-3"
          >
            <div className="flex items-center gap-x-4">
              <span className="font-inter text-base font-normal text-white">
                {index + 1}
              </span>
              <span className="font-inter text-base font-normal text-white">
                {d.title}
              </span>
            </div>
            <div className="flex items-center">
              {isCompletedOffersGroup && (
                <div
                  className={cn(
                    "flex items-center justify-center gap-x-2 rounded-full border bg-white/20 px-3 py-[10px]",
                    d.type === "adds" && "border-green-normal",
                    d.type === "questionary" && "border-grey-light",
                    d.type === "game" && "border-[#FDB836]",
                  )}
                >
                  {d.type === "adds" && <Adds />}
                  {d.type === "questionary" && <Question />}
                  {d.type === "game" && <Game />}
                  <span className="font-inter text-xs font-normal text-white capitalize">
                    {d.type}
                  </span>
                </div>
              )}
              {isCompletedMissionsGroup && (
                <span className="font-inter text-sm font-normal text-white">
                  {d.mission}
                </span>
              )}
            </div>
            <div className="flex items-center gap-x-3">
              <Time />
              <span className="font-inter text-sm font-medium text-white">
                {d.reward}
              </span>
            </div>
            <div className="flex items-center justify-end gap-x-3 pr-16">
              <Clock />
              <span className="font-inter text-sm font-medium text-white">
                {format(d.completedAt, "d MMMM, yyyy")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
