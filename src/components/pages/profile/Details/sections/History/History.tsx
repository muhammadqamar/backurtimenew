import { Groups } from "@/components/common";
import { Refresh } from "@/components/icons";
import { useState } from "react";
import HistoryTable from "./components/Table";

const HISTORY_SECTION_GROUPS = [
  {
    id: "history-section-group-1",
    title: "Completed offers",
    name: "completed_offers",
  },
  {
    id: "history-section-group-2",
    title: "Completed missions",
    name: "completed_missions",
  },
  {
    id: "history-section-group-3",
    title: "Completed draws",
    name: "completed_draws",
  },
  { id: "history-section-group-4", title: "Prizes won", name: "prizes_won" },
  {
    id: "history-section-group-5",
    title: "Store purchases",
    name: "store_purchases",
  },
];

export default function HistorySection() {
  const [currentGroup, setCurrentGroup] = useState("completed_offers");

  return (
    <div className="flex w-full flex-col gap-y-8">
      <div className="flex flex-col gap-y-[10px]">
        <span className="font-inter text-lg font-medium text-white">
          Completed history
        </span>
        <span className="text-grey-light font-inter text-base font-normal">
          History of completed offers, missions and draws.
        </span>
      </div>
      <div className="flex w-full flex-col gap-y-6">
        <Groups
          groups={HISTORY_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />
        <HistoryTable currentGroup={currentGroup} />
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="flex cursor-pointer items-center justify-center gap-x-[6px]"
          onClick={() => alert("In development")}
        >
          <Refresh />
          <span className="font-inter text-base font-semibold text-white">
            Load more
          </span>
        </button>
      </div>
    </div>
  );
}
