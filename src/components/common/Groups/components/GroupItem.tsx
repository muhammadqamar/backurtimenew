import { cn } from "@/utils";
import type { Group } from "../types";

interface GroupItemProps {
  group: Group;
  currentGroup: string;
  onGroupChange: (value: string) => void;
}

export default function GroupItem({
  group,
  currentGroup,
  onGroupChange,
}: GroupItemProps) {
  const { title, name } = group;

  const isActiveGroup = currentGroup === name;

  return (
    <button
      className={cn(
        "flex w-full cursor-pointer items-center justify-center rounded-2xl px-4 py-[9px]",
        isActiveGroup &&
          "bg-[linear-gradient(120deg,#90D2F6_0%,#C2E8FD_1%,#00CDBD_90%,#009FAA_100%)]",
      )}
      onClick={() => onGroupChange(name)}
    >
      <span className="font-inter text-base font-medium text-white">
        {title}
      </span>
    </button>
  );
}
