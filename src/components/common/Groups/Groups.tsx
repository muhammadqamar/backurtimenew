"use client";

import type { Group } from "./types";
import { useState } from "react";
import { cn } from "@/utils";
import GroupItem from "./components/GroupItem";

interface TabsProps {
  groups: Group[];
  wrapperClassName?: string;
  onGroupChange?: (value: string) => void;
}

export default function Groups({
  groups,
  wrapperClassName = "",
  onGroupChange,
}: TabsProps) {
  const [currentGroup, setCurrentGroup] = useState(groups[0].name);

  const handleGroupChange = (group: string) => {
    if (onGroupChange) {
      onGroupChange(group);
    }

    setCurrentGroup(group);
  };

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${groups.length}, 1fr)` }}
      className={cn(
        "grid w-full overflow-x-auto rounded-2xl bg-white/20 p-[3px]",
        wrapperClassName,
      )}
    >
      {groups.map((g) => (
        <GroupItem
          key={g.id}
          group={g}
          onGroupChange={handleGroupChange}
          currentGroup={currentGroup}
        />
      ))}
    </div>
  );
}
